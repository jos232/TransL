"""
TransL combined image moderation policy.

This module combines:
- NudeNet body-part detections
- OpenNSFW NSFW probability

Detector results remain separate from the final policy decision.
"""


DEFAULT_NSFW_THRESHOLD = 0.50


def evaluate_image(
    nudenet_detections,
    opennsfw_result,
    nsfw_threshold=DEFAULT_NSFW_THRESHOLD,
):
    """
    Produce one TransL moderation decision from both detectors.
    """

    blocking_detections = []

    for detection in nudenet_detections:
        label = detection.get("class")
        score = detection.get("score", 0)

        if label in {
            "FEMALE_GENITALIA_EXPOSED",
            "MALE_GENITALIA_EXPOSED",
            "ANUS_EXPOSED",
            "FEMALE_BREAST_EXPOSED",
        }:
            blocking_detections.append({
                "class": label,
                "score": score,
            })

    if blocking_detections:
        return {
            "action": "BLOCK",
            "reason": "BLOCKING_NUDITY_DETECTED",
            "source": "NudeNet",
            "detections": blocking_detections,
        }

    nsfw_score = opennsfw_result.get("nsfw", 0)

    if nsfw_score >= nsfw_threshold:
        return {
            "action": "BLOCK",
            "reason": "NSFW_SCORE_ABOVE_THRESHOLD",
            "source": "OpenNSFW",
            "nsfw_score": nsfw_score,
            "threshold": nsfw_threshold,
            "detections": [],
        }

    return {
        "action": "ALLOW",
        "reason": "NO_BLOCKING_CONTENT_DETECTED",
        "source": "Combined",
        "nsfw_score": nsfw_score,
        "threshold": nsfw_threshold,
        "detections": [],
    }


if __name__ == "__main__":
    print("TransL combined image policy loaded.")
    print(f"Default OpenNSFW threshold: {DEFAULT_NSFW_THRESHOLD}")
