const fs = require("fs");

const path = "./js/language.js";
const backup = "./js/language.backup-before-safe-enrichment-20260918.js";

const text = fs.readFileSync(path, "utf8");

const startMarker = "const TRANSL_LANGUAGES =";
const start = text.indexOf(startMarker);
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

const metadata = {
    mas: {
        displayName: "Maasai",
        alternateNames: ["Masai", "Maa"],
        countries: ["Kenya", "Tanzania"],
        script: "Latin"
    },

    swa: {
        displayName: "Swahili",
        alternateNames: ["Kiswahili"],
        countries: [
            "Kenya",
            "Tanzania",
            "Uganda",
            "Democratic Republic of the Congo"
        ],
        script: "Latin"
    },

    swh: {
        displayName: "Swahili",
        alternateNames: ["Kiswahili"],
        countries: ["Kenya", "Tanzania"],
        script: "Latin"
    },

    luo: {
        displayName: "Luo",
        alternateNames: ["Dholuo"],
        countries: ["Kenya", "Tanzania"],
        script: "Latin"
    },

    kik: {
        displayName: "Kikuyu",
        alternateNames: ["Gikuyu", "Gĩkũyũ"],
        countries: ["Kenya"],
        script: "Latin"
    },

    tuk: {
        displayName: "Turkmen",
        alternateNames: ["Türkmen"],
        countries: ["Turkmenistan", "Afghanistan", "Iran"],
        script: "Latin"
    },

    kal: {
        displayName: "Kalaallisut",
        alternateNames: ["Greenlandic"],
        countries: ["Greenland"],
        script: "Latin"
    }
};

let enrichedCount = 0;

for (const language of languages) {
    const data = metadata[language.code];

    if (!data) {
        continue;
    }

    Object.assign(language, data);
    enrichedCount++;
}

if (enrichedCount !== Object.keys(metadata).length) {
    throw new Error(
        `Expected to enrich ${Object.keys(metadata).length} languages, enriched ${enrichedCount}.`
    );
}

fs.copyFileSync(path, backup);

const newArray = JSON.stringify(languages, null, 4);

const newText =
    text.slice(0, arrayStart) +
    newArray +
    text.slice(arrayEnd + 1);

fs.writeFileSync(path, newText, "utf8");

console.log("Language enrichment completed.");
console.log("Total languages:", languages.length);
console.log("Languages enriched:", enrichedCount);
console.log("Backup:", backup);
