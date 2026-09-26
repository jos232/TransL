from pathlib import Path

from opennsfw_onnx import NSFWClassifier


IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL OpenNSFW Test ===")
    print(f"Image: {IMAGE}")

    classifier = NSFWClassifier()

    prediction = classifier.classify(IMAGE)

    print("\nOpenNSFW prediction:")
    print(prediction)

    print("\nNSFW score:", prediction.nsfw)
    print("SFW score:", prediction.sfw)
    print("Is NSFW:", prediction.is_nsfw)


if __name__ == "__main__":
    main()
