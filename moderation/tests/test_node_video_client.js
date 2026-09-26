"use strict";

const path = require("path");

const {
    moderateVideo
} = require("../node_client");

async function runTest() {

    const videoPath = path.resolve(
        __dirname,
        "harmless_test_video.mp4"
    );

    console.log(
        "Testing TransL Node video moderation client..."
    );

    console.log(
        "Video:",
        videoPath
    );

    try {

        const result = await moderateVideo(
            videoPath
        );

        console.log(
            "Moderation result:"
        );

        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );

        if (
            result.action !== "ALLOW"
        ) {
            throw new Error(
                `Expected ALLOW but received ${result.action}`
            );
        }

        console.log(
            "NODE VIDEO MODERATION TEST: PASS"
        );

    } catch (error) {

        console.error(
            "NODE VIDEO MODERATION TEST: FAIL"
        );

        console.error(
            error
        );

        process.exitCode = 1;
    }
}

runTest();