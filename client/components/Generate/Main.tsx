'use client'

import getSurpriseMe from '@/utils/getSurpriseMe'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import downloadImage from '@/utils/downloadImage'

const containerVariants = {
  // when the component is in view it should be scaled to 1 else scale down to 0.5
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
  initial: {
    scale: 0.5,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function Main() {
  const [input, setInput] = useState('')
  const [image, setImage] = useState('')
  const [prompt, setPrompt] = useState('')

  const surpriseMe = () => {
    // get a random surprise me prompt
    setInput(getSurpriseMe)
  }

  const generate = async () => {
    // check if input is empty or not
    if (input === '') {
      // input is empty so return an error toast
      toast.error('Please enter a prompt')
      return
    }

    // check if env variables are set or not
    if (process.env.NEXT_PUBLIC_API_BASE_URL === undefined) {
      toast.error(`error connecting to server`)
      return
    }

    // input is not empty so make a request to the server
    const loading = toast.loading('SNAP AI is working... 👷🏻‍♂️')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/dalle/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: input,
          }),
        }
      )

      const data = await res.json()

      // request was successful so return a success toast
      toast.dismiss(loading)

      toast.success('AND Here we go! 🎉')

      // set image
      setImage(`data:image/jpeg;base64,${data.photo}`)

      // set prompt
      setPrompt(input)

      console.log(data)
    } catch (err) {
      // dismiss the loading toast
      toast.dismiss(loading)

      // error occured so return an error toast
      toast.error('OOPSIE WOOPSIE!! Sever is sleeping 😴')
    }
  }

  const shareWithCommunity = async () => {
    // check if both prompt and image are empty or not
    if (prompt === '' || image === '') {
      // input is empty so return an error toast
      toast.error('Please generate an image first')
      return
    }

    // check if env variables are set or not
    if (process.env.NEXT_PUBLIC_API_BASE_URL === undefined) {
      toast.error(`error connecting to server`)
      return
    }

    // Make an API request to the server
    const loading = toast.loading('Sharing with community... 👷🏻‍♂️')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/post/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          photo: image,
          name: 'Anonymous',
        }),
      })

      const data = await res.json()

      // dismiss the loading toast
      toast.dismiss(loading)

      // check if the request was successful or not
      if (data.success) {
        // request was successful so return a success toast
        toast.success('Shared with community! 🎉')
      } else {
        // request was not successful so return an error toast
        toast.error('OOPSIE WOOPSIE!! Sever is sleeping 😴')
      }

      console.log(data)
    } catch (err) {
      // dismiss the loading toast
      toast.dismiss(loading)

      // error occured so return an error toast
      toast.error('OOPSIE WOOPSIE!! Sever is sleeping 😴')
    }
  }

  const download = async () => {
    // download the image
    downloadImage(image)
  }

  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <Toaster position='top-center' />
      <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
        className='w-full p-2 md:w-4/5'
      >
        <h3 className='text-start text-lg'>
          Start with a detailed description
        </h3>

        <div className='my-4 flex h-12 items-center rounded-xl border border-gray-300'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='h-full flex-1 overflow-x-scroll bg-transparent px-4 text-base outline-none md:text-lg'
          />

          <div
            onClick={generate}
            className='flex h-full cursor-pointer items-center justify-center rounded-xl rounded-l-none border-l border-gray-300 bg-[#1a6eff] px-3 font-semibold hover:bg-[#0058ef]'
          >
            Generate
          </div>
        </div>

        {/* Surprise me */}
        <div className='flex items-center justify-center'>
          <div
            onClick={surpriseMe}
            className='cursor-pointer rounded-full bg-[#1a6eff] px-5 py-2 text-lg font-semibold hover:bg-[#0058ef]'
          >
            Surprise Me
          </div>
        </div>

        {/* Image */}
        <AnimatePresence>
          {
            // show image if image is not empty
            image !== '' && (
              <motion.div
                key={image}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className='my-10 flex w-full flex-col items-center justify-evenly md:flex-row'
              >
                <motion.div className='w-full rounded-md border md:w-1/3'>
                  <img
                    src={image}
                    alt='generated'
                    className='w-full rounded-md'
                  />
                </motion.div>

                {/* Share With Community */}
                <div className='mt-10 flex flex-col items-center space-y-7 md:mt-0 '>
                  <h3 className='text-center text-lg font-semibold md:text-xl'>
                    {prompt}
                  </h3>

                  <div className='flex items-center justify-center space-x-4'>
                    <div
                      onClick={shareWithCommunity}
                      className='cursor-pointer rounded-full bg-gray-800 px-5 py-2 text-lg font-semibold hover:border hover:bg-transparent'
                    >
                      Share
                    </div>

                    {/* Download */}
                    <div
                      onClick={download}
                      className='cursor-pointer rounded-full bg-[#1a6eff] px-5 py-2 text-lg font-semibold hover:bg-[#0058ef]'
                    >
                      Download
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Main
