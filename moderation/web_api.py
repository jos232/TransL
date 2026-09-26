"""
TransL Moderation HTTP API

Laboratory service only.
Not connected to the existing TransL upload routes.
"""

import shutil
import tempfile
from pathlib import Path

from fastapi import FastAPI, File, HTTPException, UploadFile
from pydantic import BaseModel

from moderation.api import TransLModerationEngine


app = FastAPI(
    title="TransL Moderation API",
    version="0.1.0",
)


engine = TransLModerationEngine()


class ImageModerationResponse(BaseModel):
    success: bool
    media_type: str
    action: str
    reason: str
    source: str
    nsfw_score: float
    threshold: float
    detections: list


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "transl-moderation",
    }


@app.post(
    "/moderate/image",
    response_model=ImageModerationResponse,
)
async def moderate_image(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="Image filename is required.",
        )

    suffix = Path(file.filename).suffix.lower()

    allowed_extensions = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
    }

    if suffix not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Unsupported image format.",
        )

    temp_path = None

    try:
        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=suffix,
        ) as temp_file:

            shutil.copyfileobj(
                file.file,
                temp_file,
            )

            temp_path = Path(temp_file.name)

        result = engine.moderate_image(temp_path)

        decision = result["decision"]

        return ImageModerationResponse(
            success=True,
            media_type="image",
            action=decision["action"],
            reason=decision["reason"],
            source=decision["source"],
            nsfw_score=decision["nsfw_score"],
            threshold=decision["threshold"],
            detections=decision["detections"],
        )

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )

    finally:
        if temp_path and temp_path.exists():
            temp_path.unlink()


@app.post(
    "/moderate/video",
)
async def moderate_video(file: UploadFile = File(...)):

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="Video filename is required.",
        )

    suffix = Path(file.filename).suffix.lower()

    allowed_extensions = {
        ".mp4",
        ".mov",
        ".avi",
        ".mkv",
        ".webm",
    }

    if suffix not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Unsupported video format.",
        )

    temp_path = None

    try:

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=suffix,
        ) as temp_file:

            shutil.copyfileobj(
                file.file,
                temp_file,
            )

            temp_path = Path(temp_file.name)

        result = engine.moderate_video(
            temp_path,
            interval_seconds=1,
        )

        return {
            "success": True,
            **result,
        }

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=str(error),
        )

    finally:

        if temp_path and temp_path.exists():
            temp_path.unlink()


def start_server():
    import uvicorn

    uvicorn.run(
        app,
        host="127.0.0.1",
        port=8001,
        reload=False,
    )


if __name__ == "__main__":
    start_server()
