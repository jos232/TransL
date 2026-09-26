from pathlib import Path

from moderation.image.nudenet_detector import TransLNudeNetDetector
from moderation.image.opennsfw_detector import TransLOpenNSFWDetector
from moderation.policy.combined_image_policy import evaluate_image


TEST_IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL Final Image Moderation Test ===")
    print(f"Image: {TEST_IMAGE}")

    print("\n[1] NudeNet detector...")
    nudenet = TransLNudeNetDetector()
    nudenet_detections = nudenet.detect(TEST_IMAGE)

    print("NudeNet:")
    print(nudenet_detections)

    print("\n[2] OpenNSFW detector...")
    opennsfw = TransLOpenNSFWDetector()
    opennsfw_result = opennsfw.classify(TEST_IMAGE)

    print("OpenNSFW:")
    print(opennsfw_result)

    print("\n[3] TransL combined policy...")
    decision = evaluate_image(
        nudenet_detections,
        opennsfw_result,
    )

    print("\nFINAL TRANSL DECISION:")
    print(decision)


if __name__ == "__main__":
    main()
