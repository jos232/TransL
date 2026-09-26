"""
TransL Moderation API

Laboratory API only.
This module is not connected to the existing TransL upload routes.
"""

from pathlib import Path

from moderation.image.nudenet_detector import TransLNudeNetDetector
from moderation.image.opennsfw_detector import TransLOpenNSFWDetector
from moderation.policy.combined_image_policy import evaluate_image
from moderation.video.video_moderator import TransLVideoModerator


class TransLModerationEngine:
    """Run the TransL image moderation pipeline."""

    def __init__(self):
        print("Initializing TransL moderation engine...")

        self.nudenet = TransLNudeNetDetector()
        self.opennsfw = TransLOpenNSFWDetector()
        self.video = TransLVideoModerator()

        print("TransL moderation engine ready.")


    def moderate_video(
        self,
        video_path,
        interval_seconds=1,
    ):
        return self.video.moderate_video(
            video_path,
            interval_seconds=interval_seconds,
        )
    def moderate_image(self, image_path):
        path = Path(image_path)

        if not path.is_file():
            raise FileNotFoundError(f"Image not found: {path}")

        nudenet_detections = self.nudenet.detect(path)

        opennsfw_result = self.opennsfw.classify(path)

        decision = evaluate_image(
            nudenet_detections,
            opennsfw_result,
        )

        return {
            "media_type": "image",
            "decision": decision,
            "detectors": {
                "nudenet": nudenet_detections,
                "opennsfw": opennsfw_result,
            },
        }


if __name__ == "__main__":
    print("TransL Moderation API module loaded.")
