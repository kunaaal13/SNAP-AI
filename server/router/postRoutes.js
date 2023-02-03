import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../mongodb/models/Post.js'

const router = express.Router()

// load environment variables
dotenv.config()

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Routes

// Get all posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find()

    res.status(200).json({
      success: true,
      data: posts,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: err,
    })
  }
})

// Create a post
router.route('/').post(async (req, res) => {
  try {
    // Get name, prompt, and photo from request
    const { name, prompt, photo } = req.body

    console.log(photo)

    // Upload photo to cloudinary
    const photoUrl = await cloudinary.uploader.upload(photo)

    console.log(photoUrl)

    // Create a new post
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })

    res.status(201).json({
      success: true,
      data: newPost,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: err,
    })
  }
})

export default router
