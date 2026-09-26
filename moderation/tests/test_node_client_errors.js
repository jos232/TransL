"use strict";

const path = require("path");

const { moderateImage } = require("../node_client");

async function testMissingFile() {
    console.log("\n=== Missing File Test ===");

    const missingPath = path.join(
        __dirname,
        "does-not-exist.png"
    );

    try {
        await moderateImage(missingPath);

        console.log("FAIL: Missing file was accepted.");
        return false;
    } catch (error) {
        console.log(`Expected error: ${error.message}`);
        console.log("PASS: Missing file rejected.");
        return true;
    }
}

async function testUnsupportedFormat() {
    console.log("\n=== Unsupported Format Test ===");

    const unsupportedPath = path.join(
        __dirname,
        "fake.txt"
    );

    const fs = require("fs");

    fs.writeFileSync(
        unsupportedPath,
        "This is not an image."
    );

    try {
        await moderateImage(unsupportedPath);

        console.log("FAIL: Unsupported format was accepted.");
        return false;
    } catch (error) {
        console.log(`Expected error: ${error.message}`);
        console.log("PASS: Unsupported format rejected.");
        return true;
    } finally {
        if (fs.existsSync(unsupportedPath)) {
            fs.unlinkSync(unsupportedPath);
        }
    }
}

async function main() {
    console.log("=== TransL Moderation Client Error Tests ===");

    const missingPassed = await testMissingFile();
    const formatPassed = await testUnsupportedFormat();

    console.log("\n=== ERROR TEST SUMMARY ===");

    const passed =
        Number(missingPassed) +
        Number(formatPassed);

    console.log(`Passed: ${passed}/2`);

    if (passed !== 2) {
        process.exit(1);
    }

    console.log("ALL ERROR TESTS PASSED.");
}

main().catch((error) => {
    console.error("\nUnexpected test failure:");
    console.error(error);
    process.exit(1);
});
