import express from 'express'
import * as dotenv from 'dotenv'
import Post from '../mongodb/models/Post.js'
import { Configuration, OpenAIApi } from 'openai'

const router = express.Router()

// load environment variables
dotenv.config()

// OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

// Routes
router.route('/').get(async (req, res) => {
  res.send('Hello World from dalleRoutes.js')
})

router.route('/').post(async (req, res) => {
  try {
    // get prompt from request
    const { prompt } = req.body

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    })

    const image = aiResponse.data.data[0].b64_json

    res.status(200).json({ photo: image })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

export default router
