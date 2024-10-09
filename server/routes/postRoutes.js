import express  from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from "../MongoDB/models/post.js";

dotenv.config();

const postRoutes = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET
postRoutes.route('/').get(async (req, res) => {
    try {
        const allPosts = await Post.find({});
        res.status(200).json({ success: true, data: allPosts });
    } catch (error) {
        res.status(200).json({ success: false, message : error });
    }
})


// POST
postRoutes.route('/').post(async (req, res) => {
    try {
        const {name, prompt, photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo : photoUrl.url
        })

        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
})


export default postRoutes;