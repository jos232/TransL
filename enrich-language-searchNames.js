const fs = require("fs");

const path = "./js/language.js";
const backup = "./js/language.backup-before-searchNames-enrichment-20260919.js";

const text = fs.readFileSync(path, "utf8");

const start = text.indexOf("const TRANSL_LANGUAGES =");
const arrayStart = text.indexOf("[", start);
const arrayEnd = text.indexOf("];", arrayStart);

if (start === -1 || arrayStart === -1 || arrayEnd === -1) {
    throw new Error("Could not locate TRANSL_LANGUAGES array.");
}

const arrayText = text.slice(arrayStart, arrayEnd + 1);

const languages = Function(
    `"use strict"; return (${arrayText});`
)();

if (languages.length !== 7927) {
    throw new Error(
        `Expected 7927 languages, found ${languages.length}.`
    );
}

let enrichedCount = 0;

for (const language of languages) {

    if (
        typeof language.name !== "string" ||
        !/\([^()]+\)/.test(language.name)
    ) {
        continue;
    }

    const baseName = language.name
        .replace(/\s*\([^()]+\)\s*$/, "")
        .trim();

    if (!baseName || baseName === language.name) {
        continue;
    }

    language.searchNames = [baseName];
    enrichedCount++;
}

if (enrichedCount !== 282) {
    throw new Error(
        `Expected 282 searchNames enrichments, found ${enrichedCount}.`
    );
}

fs.copyFileSync(path, backup);

const newArray = JSON.stringify(languages, null, 4);

const newText =
    text.slice(0, arrayStart) +
    newArray +
    text.slice(arrayEnd + 1);

fs.writeFileSync(path, newText, "utf8");

console.log("searchNames enrichment completed.");
console.log("Total languages:", languages.length);
console.log("Languages enriched:", enrichedCount);
console.log("Backup:", backup);
