const fs = require("fs");

const text = fs.readFileSync("./js/language.js", "utf8");

const start = text.indexOf("const TRANSL_LANGUAGES =");
const arrayStart = text.indexOf("[", start);
const arrayEnd = text.indexOf("];", arrayStart);

const languages = Function(
    `"use strict"; return (${text.slice(arrayStart, arrayEnd + 1)});`
)();

const qualified = languages.filter(
    language =>
        typeof language.name === "string" &&
        /\([^()]+\)/.test(language.name)
);

console.log("Total languages:", languages.length);
console.log("Names with parenthetical qualifiers:", qualified.length);

console.log("");
console.log("Sample search aliases:");

for (const language of qualified.slice(0, 20)) {
    const baseName = language.name
        .replace(/\s*\([^()]+\)\s*$/, "")
        .trim();

    console.log(
        `${language.code}: "${language.name}" -> "${baseName}"`
    );
}
