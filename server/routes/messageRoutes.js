"use strict";

/* ==========================================
   TRANSL
   MESSAGE ROUTES
========================================== */

const express = require("express");

const router =
    express.Router();

const {
    sendMessage,
    getConversation,
    getUnreadCount
} =
    require("../controllers/messageController");


/* ==========================================
   AUTHENTICATION
========================================== */

const {
    requireAuth
} =
    require("../middleware/auth");


/* ==========================================
   SEND MESSAGE
========================================== */

router.post(
    "/",
    requireAuth,
    sendMessage
);


/* ==========================================
   GET CONVERSATION
========================================== */

router.get(
    "/conversation/:userId",
    requireAuth,
    getConversation
);


/* ==========================================
   GET UNREAD COUNT
========================================== */

router.get(
    "/unread-count",
    requireAuth,
    getUnreadCount
);


module.exports =
    router;