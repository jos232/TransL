const fs = require("fs");

const path = "./js/language.js";
const text = fs.readFileSync(path, "utf8");

const startMarker = "const TRANSL_LANGUAGES =";
const start = text.indexOf(startMarker);

if (start === -1) {
    throw new Error("TRANSL_LANGUAGES declaration not found.");
}

const arrayStart = text.indexOf("[", start);
const arrayEnd = text.indexOf("];", arrayStart);

if (arrayStart === -1 || arrayEnd === -1) {
    throw new Error("TRANSL_LANGUAGES array boundaries not found.");
}

const arrayText = text.slice(arrayStart, arrayEnd + 1);

const languages = Function(
    `"use strict"; return (${arrayText});`
)();

console.log("Total languages:", languages.length);

const mas = languages.find(
    language => language.code === "mas"
);

console.log("Before:");
console.log(JSON.stringify(mas, null, 2));

mas.displayName = "Maasai";
mas.alternateNames = ["Masai", "Maa"];
mas.countries = ["Kenya", "Tanzania"];
mas.script = "Latin";

console.log("After:");
console.log(JSON.stringify(mas, null, 2));

console.log("");
console.log("Original language.js was NOT modified.");
