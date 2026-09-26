from pathlib import Path

from moderation.api import TransLModerationEngine


TEST_IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL Moderation Engine Test ===")
    print(f"Image: {TEST_IMAGE}")

    engine = TransLModerationEngine()

    result = engine.moderate_image(TEST_IMAGE)

    print("\n=== MODERATION RESULT ===")
    print(result)

    print("\nFinal action:")
    print(result["decision"]["action"])


if __name__ == "__main__":
    main()
