from pathlib import Path

from moderation.image.nudenet_detector import TransLNudeNetDetector
from moderation.image.opennsfw_detector import TransLOpenNSFWDetector
from moderation.policy.image_policy import evaluate_detections


TEST_IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL Combined Image Moderation Test ===")
    print(f"Image: {TEST_IMAGE}")

    print("\n[1] Running NudeNet...")
    nudenet = TransLNudeNetDetector()
    nudenet_detections = nudenet.detect(TEST_IMAGE)

    print("NudeNet output:")
    print(nudenet_detections)

    print("\n[2] Running OpenNSFW...")
    opennsfw = TransLOpenNSFWDetector()
    opennsfw_result = opennsfw.classify(TEST_IMAGE)

    print("OpenNSFW output:")
    print(opennsfw_result)

    print("\n[3] Running NudeNet policy...")
    nudenet_decision = evaluate_detections(nudenet_detections)

    print("NudeNet policy decision:")
    print(nudenet_decision)

    print("\n=== Combined Detector Results ===")
    print({
        "nudenet": {
            "detections": nudenet_detections,
            "decision": nudenet_decision,
        },
        "opennsfw": opennsfw_result,
    })


if __name__ == "__main__":
    main()
