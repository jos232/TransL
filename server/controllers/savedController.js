"use strict";

/* ==========================================
   TRANSL
   SAVED POST CONTROLLER
========================================== */

const mongoose = require("mongoose");

const SavedPost =
    require("../models/SavedPost");

const Post =
    require("../models/Post");


/* ==========================================
   SAVE POST
========================================== */

async function savePost(req, res) {

    try {

        const userId =
            req.user._id;

        const postId =
            req.params.postId;


        /* ==================================
           VALIDATE POST ID
        ================================== */

        if (
            !mongoose.Types.ObjectId.isValid(
                postId
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid post ID."

            });

        }


        /* ==================================
           CHECK POST
        ================================== */

        const post =
            await Post.findById(
                postId
            );


        if (!post) {

            return res.status(404).json({

                success: false,

                message:
                    "Post not found."

            });

        }


        /* ==================================
           CHECK EXISTING SAVE
        ================================== */

        const existingSave =
            await SavedPost.findOne({

                user:
                    userId,

                post:
                    postId

            });


        if (existingSave) {

            return res.status(409).json({

                success: false,

                message:
                    "Post is already saved."

            });

        }


        /* ==================================
           CREATE SAVED POST
        ================================== */

        const savedPost =
            await SavedPost.create({

                user:
                    userId,

                post:
                    postId

            });


        /* ==================================
           POPULATE POST
        ================================== */

        await savedPost.populate({

            path:
                "post",

            populate: {

                path:
                    "author",

                select:
                    "name username avatar"

            }

        });


        /* ==================================
           RESPONSE
        ================================== */

        return res.status(201).json({

            success: true,

            message:
                "Post saved successfully.",

            data:
                savedPost

        });

    } catch (error) {

        console.error(
            "Save post error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to save post."

        });

    }

}


/* ==========================================
   GET SAVED POSTS
========================================== */

async function getSavedPosts(req, res) {

    try {

        const userId =
            req.user._id;


        /* ==================================
           GET SAVED POSTS
        ================================== */

        const savedPosts =
            await SavedPost.find({

                user:
                    userId

            })
                .sort({
                    createdAt: -1
                })
                .populate({

                    path:
                        "post",

                    populate: {

                        path:
                            "author",

                        select:
                            "name username avatar"

                    }

                });


        /* ==================================
           RESPONSE
        ================================== */

        return res.json({

            success: true,

            data:
                savedPosts

        });

    } catch (error) {

        console.error(
            "Get saved posts error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to load saved posts."

        });

    }

}


/* ==========================================
   UNSAVE POST
========================================== */

async function unsavePost(req, res) {

    try {

        const userId =
            req.user._id;

        const postId =
            req.params.postId;


        /* ==================================
           VALIDATE POST ID
        ================================== */

        if (
            !mongoose.Types.ObjectId.isValid(
                postId
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid post ID."

            });

        }


        /* ==================================
           DELETE SAVE
        ================================== */

        const deletedSave =
            await SavedPost.findOneAndDelete({

                user:
                    userId,

                post:
                    postId

            });


        if (!deletedSave) {

            return res.status(404).json({

                success: false,

                message:
                    "Saved post not found."

            });

        }


        /* ==================================
           RESPONSE
        ================================== */

        return res.json({

            success: true,

            message:
                "Post removed from Saved."

        });

    } catch (error) {

        console.error(
            "Unsave post error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to remove saved post."

        });

    }

}


/* ==========================================
   EXPORTS
========================================== */

module.exports = {

    savePost,

    getSavedPosts,

    unsavePost

};
