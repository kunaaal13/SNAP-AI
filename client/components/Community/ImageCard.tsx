'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { toast, Toaster } from 'react-hot-toast'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { VscCopy } from 'react-icons/vsc'
import downloadImage from '../../utils/downloadImage'

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
    scale: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function ImageCard({ image }: Props) {
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

  return (
    <motion.div
      className={`group relative `}
      variants={imageVariants}
      initial='hidden'
      animate='visible'
    >
      <Toaster />
      <Image
        src={image.photo}
        alt={image._id}
        className={`h-full w-full rounded-md`}
        height={300}
        width={300}
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
    </motion.div>
  )
}

export default ImageCard
