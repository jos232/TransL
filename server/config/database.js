"use strict";

/* ==========================================
   TRANSL
   MONGODB DATABASE CONNECTION
========================================== */

const mongoose = require("mongoose");

/* ==========================================
   CONNECT TO MONGODB
========================================== */

async function connectDatabase() {

    const mongoUri =
        process.env.MONGODB_URI;

    if (!mongoUri) {

        throw new Error(
            "MONGODB_URI is not configured."
        );

    }

    try {

        await mongoose.connect(mongoUri);

        console.log(
            "TransL MongoDB connected successfully."
        );

    } catch (error) {

        console.error(
            "TransL MongoDB connection failed:",
            error.message
        );

        throw error;

    }

}

/* ==========================================
   EXPORT
========================================== */

module.exports =
    connectDatabase;