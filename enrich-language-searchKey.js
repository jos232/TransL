const fs = require("fs");

const path = "./js/language.js";
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

const normalize = (value) =>
    String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/\s+/g, " ")
        .trim();

for (const language of languages) {

    const values = [
        language.name,
        language.code,
        ...(language.searchNames || [])
    ];

    language.searchKey = [
        ...new Set(
            values
                .map(normalize)
                .filter(Boolean)
        )
    ].join(" ");
}

const replacement =
    "const TRANSL_LANGUAGES = " +
    JSON.stringify(languages, null, 4) +
    ";";

const updatedText =
    text.slice(0, start) +
    replacement +
    text.slice(arrayEnd + 2);

fs.writeFileSync(path, updatedText, "utf8");

console.log("searchKey enrichment completed.");
console.log("Total languages:", languages.length);
console.log(
    "Languages with searchKey:",
    languages.filter(language => language.searchKey).length
);

for (const code of ["aib", "ain", "mas", "kik", "swa", "swh", "luo"]) {
    const language = languages.find(
        item => item.code === code
    );

    if (language) {
        console.log(
            code,
            "=>",
            language.searchKey
        );
    }
}
