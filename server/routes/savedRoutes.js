"use strict";

/* ==========================================
   TRANSL
   SAVED POST ROUTES
========================================== */

const express = require("express");

const router =
    express.Router();

const {
    savePost,
    getSavedPosts,
    unsavePost
} =
    require("../controllers/savedController");


/* ==========================================
   AUTHENTICATION
========================================== */

const {
    requireAuth
} =
    require("../server");


/* ==========================================
   GET SAVED POSTS
========================================== */

router.get(
    "/",
    requireAuth,
    getSavedPosts
);


/* ==========================================
   SAVE POST
========================================== */

router.post(
    "/:postId",
    requireAuth,
    savePost
);


/* ==========================================
   UNSAVE POST
========================================== */

router.delete(
    "/:postId",
    requireAuth,
    unsavePost
);


module.exports =
    router;
