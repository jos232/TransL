"use strict";

/* ==========================================
   TRANSL
   USER MODEL
========================================== */

const mongoose = require("mongoose");

/* ==========================================
   FAVORITE LANGUAGE SCHEMA
========================================== */

const FavoriteLanguageSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            trim: true,
            lowercase: true,
            default: ""
        },

        name: {
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
        }
    },
    {
        _id: false
    }
);
/* ==========================================
   USER SCHEMA
========================================== */

const UserSchema = new mongoose.Schema(
    {

        /* ==================================
           BASIC USER INFORMATION
        ================================== */

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100
        },

        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            maxlength: 50
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            maxlength: 150
        },

        /* ==================================
           AUTHENTICATION
        ================================== */

        passwordHash: {
            type: String,
            required: true
        },

        /* ==================================
           LOGIN SESSION
        ================================== */

        sessionToken: {
            type: String,
            default: null
        },

        sessionTokenExpires: {
            type: Date,
            default: null
        },

        /* ==================================
           FAVORITE LANGUAGE
        ================================== */

        favoriteLanguage: {
            type: FavoriteLanguageSchema,
            default: () => ({
                code: "",
                name: ""
            })
        },

        /* ==================================
           PROFILE
        ================================== */

        avatar: {
            type: String,
            default: "T"
        },

        bio: {
            type: String,
            default: "",
            maxlength: 2000
        },

        /* ==================================
           FRIEND SYSTEM
        ================================== */

        friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        friendRequestsSent: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        friendRequestsReceived: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]

    },
    {
        timestamps: true
    }
);

/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model("User", UserSchema);
