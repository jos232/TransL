"""
TransL image moderation policy.

Detector output is kept separate from policy decisions.
The policy layer decides how individual NudeNet labels
are treated by TransL.
"""

# Labels that TransL treats as blocking detections.
BLOCK_LABELS = {
    "FEMALE_GENITALIA_EXPOSED",
    "MALE_GENITALIA_EXPOSED",
    "ANUS_EXPOSED",
    "FEMALE_BREAST_EXPOSED",
}

# These labels are intentionally not automatically blocked.
# They can be reviewed by a later policy stage if needed.
NON_BLOCKING_LABELS = {
    "BUTTOCKS_EXPOSED",
    "BELLY_EXPOSED",
}


def evaluate_detections(detections):
    """
    Evaluate NudeNet detections and return a TransL policy result.

    Expected NudeNet detection format:
        [
            {
                "class": "...",
                "score": 0.95,
                ...
            }
        ]
    """

    blocking_detections = []

    for detection in detections:
        label = detection.get("class")
        score = detection.get("score", 0)

        if label in BLOCK_LABELS:
            blocking_detections.append({
                "class": label,
                "score": score,
            })

    if blocking_detections:
        return {
            "action": "BLOCK",
            "reason": "BLOCKING_NUDITY_DETECTED",
            "detections": blocking_detections,
        }

    return {
        "action": "ALLOW",
        "reason": "NO_BLOCKING_NUDITY_DETECTED",
        "detections": [],
    }


if __name__ == "__main__":
    print("TransL image policy loaded.")
    print(f"Blocking labels: {len(BLOCK_LABELS)}")
    print(f"Non-blocking labels: {len(NON_BLOCKING_LABELS)}")
