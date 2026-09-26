from pathlib import Path
from nudenet import NudeDetector


class TransLNudeNetDetector:
    """TransL wrapper around NudeNet."""

    def __init__(self):
        self.detector = NudeDetector()

    def detect(self, image_path):
        path = Path(image_path)

        if not path.is_file():
            raise FileNotFoundError(f"Image not found: {path}")

        return self.detector.detect(str(path))


if __name__ == "__main__":
    print("Initializing TransL NudeNet detector...")

    detector = TransLNudeNetDetector()

    print("NudeNet detector ready.")
