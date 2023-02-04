'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import downloadImage from '../../utils/downloadImage'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { VscCopy } from 'react-icons/vsc'
import { toast, Toaster } from 'react-hot-toast'

type Props = {
  image: image
}

const imageVariants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 100,
    },
  },
  hidden: {
    scale: 0.5,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function ImageCard({ image }: Props) {
  // generate random aspect ratio for images
  const random = Math.floor(Math.random() * 10) + 1

  const download = () => {
    // download image
    downloadImage(image.photo)
  }

  // function to copy prompt
  const copyPrompt = () => {
    // copy prompt
    navigator.clipboard.writeText(image.prompt)
    toast.success('Prompt copied to clipboard', {
      duration: 1500,
    })
  }

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='group relative'>
      <Toaster />
      <motion.img
        variants={imageVariants}
        initial='hidden'
        animate='visible'
        src={image.photo}
        alt={image._id}
        key={image._id}
        className={`${
          random % 3 === 0 ? 'aspect-square sm:aspect-[9/16]' : 'aspect-square'
        } mb-8 w-full rounded-md`}
      />

      <div
        className='absolute bottom-2 right-2 hidden cursor-pointer rounded-full bg-gray-500 p-2 opacity-60 hover:opacity-90 group-hover:inline-flex'
        onClick={download}
      >
        <AiOutlineCloudDownload className='text-2xl text-white' />
      </div>

      <div
        onClick={copyPrompt}
        className='absolute bottom-2 left-2 hidden cursor-pointer rounded-full bg-gray-500 p-2 opacity-60 hover:opacity-90 group-hover:inline-flex'
      >
        <VscCopy className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default ImageCard
