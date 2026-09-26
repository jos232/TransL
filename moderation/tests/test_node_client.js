"use strict";

const path = require("path");

const { moderateImage } = require("../node_client");

async function main() {
    const imagePath = path.join(
        __dirname,
        "harmless_test.png"
    );

    console.log("=== TransL Reusable Node Moderation Client Test ===");
    console.log(`Image: ${imagePath}`);

    const result = await moderateImage(imagePath);

    console.log("\nModeration result:");
    console.log(JSON.stringify(result, null, 2));

    if (result.success !== true) {
        throw new Error("Moderation request was not successful.");
    }

    console.log("\nReusable Node moderation client PASSED.");
}

main().catch((error) => {
    console.error("\nReusable Node moderation client FAILED.");
    console.error(error);
    process.exit(1);
});
