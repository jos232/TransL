const fs = require("fs");

const text = fs.readFileSync("./js/language.js", "utf8");

const start = text.indexOf("const TRANSL_LANGUAGES =");
const arrayStart = text.indexOf("[", start);
const arrayEnd = text.indexOf("];", arrayStart);

const languages = Function(
    `"use strict"; return (${text.slice(arrayStart, arrayEnd + 1)});`
)();

const byName = new Map();

for (const language of languages) {
    const name = String(language.name || "").trim().toLowerCase();

    if (!name) continue;

    if (!byName.has(name)) {
        byName.set(name, []);
    }

    byName.get(name).push(language.code);
}

const duplicates = [...byName.entries()]
    .filter(([, codes]) => codes.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

console.log("Total languages:", languages.length);
console.log("Unique names:", byName.size);
console.log("Names used by multiple codes:", duplicates.length);

console.log("");
console.log("Top duplicate names:");

for (const [name, codes] of duplicates.slice(0, 30)) {
    console.log(`${name} => ${codes.join(", ")}`);
}
