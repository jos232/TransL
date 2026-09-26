from pathlib import Path

import requests


API_URL = "http://127.0.0.1:8001/moderate/image"


def test_unsupported_format():
    print("=== Python API Unsupported Format Test ===")

    response = requests.post(
        API_URL,
        files={
            "file": (
                "fake.txt",
                b"This is not an image.",
                "text/plain",
            )
        },
        timeout=30,
    )

    print("HTTP status:", response.status_code)
    print("Response:", response.json())

    assert response.status_code == 400
    assert response.json()["detail"] == "Unsupported image format."

    print("PASS: Python API rejected unsupported format.")


if __name__ == "__main__":
    test_unsupported_format()
    print("\nPYTHON API ERROR TEST PASSED.")
