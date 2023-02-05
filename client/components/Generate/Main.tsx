'use client'

import getSurpriseMe from '@/utils/getSurpriseMe'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import ImgContainer from './ImgContainer'

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

  const randomPrompt = () => {
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

  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <Toaster position='top-center' />
      <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
        className='w-full p-2 md:w-4/5'
      >
        <h3 className='text-start text-lg font-semibold'></h3>

        <div className='my-4 flex h-12 items-center rounded-full border-2 border-[#525252] p-1'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Start with a detailed description'
            className='ml-4 h-full w-full rounded-full bg-transparent px-1 outline-none'
          />

          <div
            onClick={generate}
            className='mx-1 flex h-8 cursor-pointer items-center justify-center rounded-full bg-[#525252] p-2 px-6 hover:bg-[#1a6eff]'
          >
            🚀
          </div>
        </div>

        {/* Surprise me */}
        <div className='flex items-center justify-center'>
          <div
            onClick={randomPrompt}
            className='cursor-pointer rounded-full bg-[#1a6eff] px-5 py-2 text-base font-semibold hover:bg-[#0058ef] md:text-lg'
          >
            Random Prompt
          </div>
        </div>

        {/* Image */}
        {
          // show image if image is not empty
          image !== '' && <ImgContainer image={image} prompt={prompt} />
        }
      </motion.div>
    </div>
  )
}

export default Main
