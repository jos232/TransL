from pathlib import Path
import cv2
import numpy as np
from nudenet import NudeDetector

test_dir = Path(__file__).resolve().parent
image_path = test_dir / "harmless_test.png"

image = np.full((600, 800, 3), 255, dtype=np.uint8)

cv2.rectangle(image, (100, 100), (700, 500), (220, 220, 220), -1)
cv2.putText(
    image,
    "TransL Moderation Test",
    (150, 310),
    cv2.FONT_HERSHEY_SIMPLEX,
    1.2,
    (0, 0, 0),
    2,
    cv2.LINE_AA
)

cv2.imwrite(str(image_path), image)

print(f"Test image created: {image_path}")

detector = NudeDetector()
results = detector.detect(str(image_path))

print("\nNudeNet raw output:")
print(results)
