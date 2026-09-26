"""
TransL video moderation engine.

Laboratory component only.
Extracts video frames and sends each frame through
the existing NudeNet and OpenNSFW image detectors.
"""

from pathlib import Path

from moderation.image.nudenet_detector import (
    TransLNudeNetDetector,
)

from moderation.image.opennsfw_detector import (
    TransLOpenNSFWDetector,
)

from moderation.policy.combined_image_policy import (
    evaluate_image,
)

from moderation.video.frame_extractor import (
    extract_frames,
    cleanup_frames,
)


class TransLVideoModerator:
    """Moderate videos by sampling and evaluating frames."""

    def __init__(self):
        print(
            "Initializing TransL video moderator..."
        )

        self.nudenet = TransLNudeNetDetector()
        self.opennsfw = TransLOpenNSFWDetector()

        print(
            "TransL video moderator ready."
        )

    def moderate_video(
        self,
        video_path,
        interval_seconds=1,
    ):
        video_path = Path(video_path)

        if not video_path.is_file():
            raise FileNotFoundError(
                f"Video not found: {video_path}"
            )

        output_dir = None

        try:

            output_dir, frames = extract_frames(
                video_path,
                interval_seconds=interval_seconds,
            )

            frame_results = []

            for index, frame_path in enumerate(
                frames,
                start=1,
            ):

                nudenet_detections = (
                    self.nudenet.detect(
                        frame_path
                    )
                )

                opennsfw_result = (
                    self.opennsfw.classify(
                        frame_path
                    )
                )

                decision = evaluate_image(
                    nudenet_detections,
                    opennsfw_result,
                )

                frame_results.append({

                    "frame": index,

                    "path": str(frame_path),

                    "decision": decision,

                    "detectors": {

                        "nudenet":
                            nudenet_detections,

                        "opennsfw":
                            opennsfw_result,

                    },

                })

                if decision["action"] == "BLOCK":

                    return {

                        "media_type": "video",

                        "action": "BLOCK",

                        "reason":
                            decision["reason"],

                        "source":
                            decision["source"],

                        "frame": index,

                        "frames_checked":
                            len(frame_results),

                        "total_frames":
                            len(frames),

                        "frame_results":
                            frame_results,

                    }

            return {

                "media_type": "video",

                "action": "ALLOW",

                "reason":
                    "NO_BLOCKING_CONTENT_DETECTED",

                "source": "Combined",

                "frames_checked":
                    len(frame_results),

                "total_frames":
                    len(frames),

                "frame_results":
                    frame_results,

            }

        finally:

            if output_dir:

                cleanup_frames(
                    output_dir
                )


if __name__ == "__main__":

    print(
        "TransL video moderation module loaded."
    )