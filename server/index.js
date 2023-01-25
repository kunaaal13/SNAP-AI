import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import connectDB from './mongodb/connect.js'
import dalleRoutes from './router/dalleRoutes.js'
import postRoutes from './router/postRoutes.js'

// load environment variables
dotenv.config()

// create express app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Routes
app.use('/dalle/', dalleRoutes)
app.use('/post/', postRoutes)

app.get('/', async (req, res) => {
  res.send('Hello World')
})

// PORT
const PORT = process.env.PORT || 4000

// Start server
const startServer = async () => {
  try {
    // connect to MongoDB
    connectDB(process.env.MONGO_URI)

    // start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

startServer()
