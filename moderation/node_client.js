"use strict";

const fs = require("fs");
const path = require("path");

const DEFAULT_API_URL = "http://127.0.0.1:8001";

const MODERATION_API_URL = (
    process.env.TRANSL_MODERATION_API_URL ||
    DEFAULT_API_URL
).replace(/\/+$/, "");

const MIME_TYPES = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp"
};

const VIDEO_MIME_TYPES = {
    ".mp4": "video/mp4",
    ".mov": "video/quicktime",
    ".avi": "video/x-msvideo",
    ".mkv": "video/x-matroska",
    ".webm": "video/webm"
};

async function moderateImage(imagePath) {
    const resolvedPath = path.resolve(imagePath);

    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`Image not found: ${resolvedPath}`);
    }

    const extension = path.extname(resolvedPath).toLowerCase();

    const mimeType = MIME_TYPES[extension];

    if (!mimeType) {
        throw new Error(
            `Unsupported image format: ${extension || "unknown"}`
        );
    }

    const imageBuffer = fs.readFileSync(resolvedPath);

    const form = new FormData();

    form.append(
        "file",
        new Blob([imageBuffer], { type: mimeType }),
        path.basename(resolvedPath)
    );

    const response = await fetch(
        `${MODERATION_API_URL}/moderate/image`,
        {
            method: "POST",
            body: form
        }
    );

    let result;

    try {
        result = await response.json();
    } catch {
        throw new Error(
            `Moderation API returned invalid JSON (HTTP ${response.status})`
        );
    }

    if (!response.ok) {
        throw new Error(
            `Moderation API returned HTTP ${response.status}: ${
                result.detail || "Unknown error"
            }`
        );
    }

    return result;
}

async function moderateVideo(videoPath) {
    const resolvedPath = path.resolve(videoPath);

    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`Video not found: ${resolvedPath}`);
    }

    const extension = path.extname(resolvedPath).toLowerCase();

    const mimeType = VIDEO_MIME_TYPES[extension];

    if (!mimeType) {
        throw new Error(
            `Unsupported video format: ${extension || "unknown"}`
        );
    }

    const videoBuffer = fs.readFileSync(resolvedPath);

    const form = new FormData();

    form.append(
        "file",
        new Blob([videoBuffer], { type: mimeType }),
        path.basename(resolvedPath)
    );

    const response = await fetch(
        `${MODERATION_API_URL}/moderate/video`,
        {
            method: "POST",
            body: form
        }
    );

    let result;

    try {
        result = await response.json();
    } catch {
        throw new Error(
            `Moderation API returned invalid JSON (HTTP ${response.status})`
        );
    }

    if (!response.ok) {
        throw new Error(
            `Moderation API returned HTTP ${response.status}: ${
                result.detail || "Unknown error"
            }`
        );
    }

    return result;
}

module.exports = {
    moderateImage,
    moderateVideo
};
