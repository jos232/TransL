from pathlib import Path

from opennsfw_onnx import NSFWClassifier


class TransLOpenNSFWDetector:
    """TransL wrapper around OpenNSFW-ONNX."""

    def __init__(self):
        self.classifier = NSFWClassifier()

    def classify(self, image_path):
        path = Path(image_path)

        if not path.is_file():
            raise FileNotFoundError(f"Image not found: {path}")

        prediction = self.classifier.classify(path)

        return {
            "sfw": prediction.sfw,
            "nsfw": prediction.nsfw,
            "threshold": prediction.threshold,
            "is_nsfw": prediction.is_nsfw,
        }


if __name__ == "__main__":
    print("Initializing TransL OpenNSFW detector...")

    detector = TransLOpenNSFWDetector()

    print("OpenNSFW detector ready.")
