from moderation.policy.combined_image_policy import evaluate_image


def run_test(name, nudenet_detections, opennsfw_result, expected_action):
    result = evaluate_image(
        nudenet_detections,
        opennsfw_result,
    )

    passed = result["action"] == expected_action

    print(f"\n=== {name} ===")
    print("Expected:", expected_action)
    print("Actual:  ", result["action"])
    print("Reason:  ", result["reason"])
    print("PASS:    ", passed)

    return passed


def main():
    print("=== TransL Policy Engine Tests ===")

    results = []

    # 1. Completely clean content.
    results.append(
        run_test(
            "Clean Image",
            [],
            {
                "sfw": 0.99,
                "nsfw": 0.01,
            },
            "ALLOW",
        )
    )

    # 2. NudeNet detects a blocking label.
    results.append(
        run_test(
            "NudeNet Blocking Detection",
            [
                {
                    "class": "FEMALE_BREAST_EXPOSED",
                    "score": 0.95,
                }
            ],
            {
                "sfw": 0.20,
                "nsfw": 0.80,
            },
            "BLOCK",
        )
    )

    # 3. OpenNSFW alone exceeds the configured threshold.
    results.append(
        run_test(
            "OpenNSFW Above Threshold",
            [],
            {
                "sfw": 0.10,
                "nsfw": 0.90,
            },
            "BLOCK",
        )
    )

    # 4. Buttocks is currently non-blocking by policy.
    results.append(
        run_test(
            "Non-Blocking Buttocks Label",
            [
                {
                    "class": "BUTTOCKS_EXPOSED",
                    "score": 0.95,
                }
            ],
            {
                "sfw": 0.99,
                "nsfw": 0.01,
            },
            "ALLOW",
        )
    )

    print("\n=== POLICY TEST SUMMARY ===")

    passed = sum(results)
    total = len(results)

    print(f"Passed: {passed}/{total}")

    if passed == total:
        print("ALL POLICY TESTS PASSED.")
    else:
        print("SOME POLICY TESTS FAILED.")


if __name__ == "__main__":
    main()
