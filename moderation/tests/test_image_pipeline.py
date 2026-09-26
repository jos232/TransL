from pathlib import Path

from moderation.image.nudenet_detector import TransLNudeNetDetector
from moderation.policy.image_policy import evaluate_detections


TEST_IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL Image Moderation Test ===")
    print(f"Image: {TEST_IMAGE}")

    detector = TransLNudeNetDetector()

    detections = detector.detect(TEST_IMAGE)

    print("\nDetector output:")
    print(detections)

    decision = evaluate_detections(detections)

    print("\nTransL policy decision:")
    print(decision)


if __name__ == "__main__":
    main()
