const fs = require("fs");

const path = "./server/models/User.js";

let text = fs.readFileSync(path, "utf8");

const oldBlock = `        name: {
            type: String,
            trim: true,
            default: ""
        }`;

const newBlock = `        name: {
            type: String,
            trim: true,
            default: ""
        },

        displayName: {
            type: String,
            trim: true,
            default: ""
        },

        searchNames: {
            type: [String],
            default: []
        },

        searchKey: {
            type: String,
            trim: true,
            default: ""
        },

        alternateNames: {
            type: [String],
            default: []
        },

        countries: {
            type: [String],
            default: []
        },

        script: {
            type: String,
            trim: true,
            default: ""
        }`;

const occurrences = text.split(oldBlock).length - 1;

if (occurrences !== 1) {
    throw new Error(
        "Expected exactly 1 target block, found " + occurrences
    );
}

text = text.replace(oldBlock, newBlock);

fs.writeFileSync(path, text, "utf8");

console.log("FavoriteLanguageSchema enriched successfully.");
`;

