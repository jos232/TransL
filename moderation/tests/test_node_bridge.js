"use strict";

const fs = require("fs");
const path = require("path");

const API_URL = "http://127.0.0.1:8001/moderate/image";

const IMAGE = path.join(
    __dirname,
    "harmless_test.png"
);

async function main() {
    console.log("=== TransL Node -> Python Moderation Bridge Test ===");
    console.log(`Endpoint: ${API_URL}`);
    console.log(`Image:    ${IMAGE}`);

    if (!fs.existsSync(IMAGE)) {
        throw new Error(`Test image not found: ${IMAGE}`);
    }

    const imageBuffer = fs.readFileSync(IMAGE);

    const form = new FormData();

    form.append(
        "file",
        new Blob([imageBuffer], { type: "image/png" }),
        "harmless_test.png"
    );

    console.log("\nSending image to Python moderation API...");

    const response = await fetch(API_URL, {
        method: "POST",
        body: form
    });

    console.log(`HTTP status: ${response.status}`);

    const result = await response.json();

    console.log("\nPython moderation response:");
    console.log(JSON.stringify(result, null, 2));

    if (!response.ok) {
        throw new Error(
            `Moderation API returned HTTP ${response.status}`
        );
    }

    if (result.success !== true) {
        throw new Error("Moderation API did not return success=true");
    }

    console.log("\nNode -> Python bridge test PASSED.");
}

main().catch((error) => {
    console.error("\nNode -> Python bridge test FAILED.");
    console.error(error);
    process.exit(1);
});
