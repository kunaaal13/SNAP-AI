'use client'

import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  card: exampleCard
}

const containerVariants = {
  // when the component is in view it should be scaled to 1 else scale down to 0.5
  visible: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
    },
  },
  hidden: {
    rotateX: 30,
    rotateY: 30,
    scale: 0.5,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function ExampleCard({ card }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // initialize vanilla tilt
    const options = {
      max: 10,
      speed: 400,
      gyroscope: false,
    }

    if (!ref.current) return

    VanillaTilt.init(ref.current, options)
  }, [])
  return (
    <div className='flex h-screen items-center justify-center'>
      <motion.div
        whileInView='visible'
        initial='hidden'
        variants={containerVariants}
        ref={ref}
        className={`flex h-[70%] w-full items-center justify-center
        space-y-16
        rounded-2xl
        bg-gradient-radial from-indigo-200 via-pink-200 to-violet-300 p-2 py-10 md:w-4/5 lg:px-4`}

        // bg-[url('/cardBg.svg')]
      >
        <div className='relative block h-[90%] w-[80%] rounded-2xl shadow-2xl'>
          <Image
            src={card.imgSrc}
            alt={card.prompt}
            className='z-10 h-full w-full rounded-2xl'
            fill={true}
            sizes='100%'
          />

          <div className='absolute bottom-0 z-10 w-full rounded-xl bg-[rgba(0,0,0,.5)]'>
            <h3 className='w-full text-center text-lg'>{card.prompt}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ExampleCard
