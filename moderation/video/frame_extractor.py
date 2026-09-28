"""
TransL video frame extractor.

Laboratory component only.
Extracts representative frames from a video using FFmpeg.
"""

import shutil
import subprocess
import tempfile
from pathlib import Path

import cv2
import imageio_ffmpeg


def _find_ffmpeg():
    bundled = imageio_ffmpeg.get_ffmpeg_exe()

    if bundled:
        bundled_path = Path(bundled)

        if bundled_path.is_file():
            return bundled_path

    raise FileNotFoundError(
        "FFmpeg binary could not be found."
    )

FFMPEG_PATH = _find_ffmpeg()

MAX_VIDEO_DURATION_SECONDS = 120
MAX_SAMPLED_FRAMES = 120


def get_video_duration(video_path):
    """Return video duration in seconds using OpenCV."""

    video_path = Path(video_path)

    capture = cv2.VideoCapture(str(video_path))

    try:
        if not capture.isOpened():
            raise RuntimeError(
                "OpenCV could not open the video."
            )

        fps = float(
            capture.get(cv2.CAP_PROP_FPS)
        )

        frame_count = float(
            capture.get(cv2.CAP_PROP_FRAME_COUNT)
        )

        if fps <= 0 or frame_count <= 0:
            raise RuntimeError(
                "OpenCV returned invalid video duration metadata."
            )

        duration = frame_count / fps

    finally:
        capture.release()

    if duration <= 0:
        raise ValueError(
            "Video duration must be greater than zero."
        )

    return duration


def extract_frames(
    video_path,
    interval_seconds=1,
    max_frames=MAX_SAMPLED_FRAMES,
    max_duration_seconds=MAX_VIDEO_DURATION_SECONDS,
):
    """
    Extract frames from a video at a fixed time interval.

    The extractor refuses videos longer than max_duration_seconds
    and refuses to create more than max_frames.

    Returns:
        tuple[Path, list[Path]]:
            Temporary directory and extracted frame paths.
    """

    video_path = Path(video_path)

    if not video_path.is_file():
        raise FileNotFoundError(
            f"Video not found: {video_path}"
        )

    if not FFMPEG_PATH.is_file():
        raise FileNotFoundError(
            f"FFmpeg not found: {FFMPEG_PATH}"
        )


    if interval_seconds <= 0:
        raise ValueError(
            "interval_seconds must be greater than zero."
        )

    if max_frames <= 0:
        raise ValueError(
            "max_frames must be greater than zero."
        )

    if max_duration_seconds <= 0:
        raise ValueError(
            "max_duration_seconds must be greater than zero."
        )

    duration = get_video_duration(
        video_path
    )

    if duration > max_duration_seconds:
        raise ValueError(
            "Video duration exceeds the maximum allowed "
            f"duration of {max_duration_seconds} seconds. "
            f"Detected duration: {duration:.2f} seconds."
        )

    output_dir = Path(
        tempfile.mkdtemp(
            prefix="transl_video_frames_"
        )
    )

    output_pattern = output_dir / "frame_%06d.jpg"

    fps_filter = (
        f"fps=1/{interval_seconds}"
    )

    command = [
        str(FFMPEG_PATH),
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        str(video_path),
        "-vf",
        fps_filter,
        "-frames:v",
        str(max_frames + 1),
        "-q:v",
        "2",
        str(output_pattern),
    ]

    try:

        subprocess.run(
            command,
            check=True,
            capture_output=True,
            text=True,
        )

        frames = sorted(
            output_dir.glob("frame_*.jpg")
        )

        if not frames:
            raise RuntimeError(
                "FFmpeg completed but no frames were extracted."
            )

        if len(frames) > max_frames:
            raise ValueError(
                "Video exceeds the maximum allowed "
                f"sampled frame limit of {max_frames}."
            )

        return output_dir, frames

    except Exception:

        shutil.rmtree(
            output_dir,
            ignore_errors=True,
        )

        raise


def cleanup_frames(output_dir):
    """Remove an extracted-frame temporary directory."""

    output_dir = Path(output_dir)

    if output_dir.exists():
        shutil.rmtree(
            output_dir,
            ignore_errors=True,
        )


if __name__ == "__main__":
    print(
        "TransL video frame extractor loaded."
    )
    print(
        f"FFmpeg path: {FFMPEG_PATH}"
    )

    print(
        "Maximum video duration: "
        f"{MAX_VIDEO_DURATION_SECONDS} seconds"
    )
    print(
        f"Maximum sampled frames: {MAX_SAMPLED_FRAMES}"
    )
