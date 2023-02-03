'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import downloadImage from '../../utils/downloadImage'
import { AiOutlineCloudDownload } from 'react-icons/ai'

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

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='group relative group-hover:scale-105'>
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
        className='absolute bottom-2 right-2 cursor-pointer rounded-full bg-gray-500 p-2 opacity-60 hover:opacity-90'
        onClick={download}
      >
        <AiOutlineCloudDownload className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default ImageCard
