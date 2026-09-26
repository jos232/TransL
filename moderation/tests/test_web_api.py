from pathlib import Path

import requests


API_URL = "http://127.0.0.1:8001/moderate/image"

IMAGE = (
    Path(__file__).resolve().parent
    / "harmless_test.png"
)


def main():
    print("=== TransL Moderation HTTP API Test ===")
    print(f"Endpoint: {API_URL}")
    print(f"Image:    {IMAGE}")

    with IMAGE.open("rb") as image_file:
        response = requests.post(
            API_URL,
            files={
                "file": (
                    IMAGE.name,
                    image_file,
                    "image/png",
                )
            },
            timeout=120,
        )

    print("\nHTTP status:", response.status_code)

    print("\nAPI response:")
    print(response.json())


if __name__ == "__main__":
    main()
