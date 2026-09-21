"use strict";

/* ==========================================
   TRANSL
   MESSAGE MODEL
========================================== */

const mongoose = require("mongoose");


/* ==========================================
   MESSAGE SCHEMA
========================================== */

const MessageSchema = new mongoose.Schema(
    {

        /* ==================================
           SENDER
        ================================== */

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },


        /* ==================================
           RECIPIENT
        ================================== */

        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },


        /* ==================================
           MESSAGE CONTENT
        ================================== */

        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000
        },


        /* ==================================
           READ STATUS
        ================================== */

        read: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true
    }
);


/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model("Message", MessageSchema);