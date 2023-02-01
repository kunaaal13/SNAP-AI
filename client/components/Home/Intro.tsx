'use client'

import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'

const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: 100,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },

  whileInView: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function Intro() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      max: 10,
      speed: 400,
      gyroscope: false,
    }

    if (!ref.current) return

    VanillaTilt.init(ref.current, options)
  }, [])

  return (
    <div className='my-20 flex w-full justify-center'>
      <motion.div
        variants={containerVariants}
        initial='initial'
        whileInView='whileInView'
        className='flex h-full w-full flex-col items-center p-2 py-10 md:w-5/6 lg:px-4'
        ref={ref}
      >
        {/* Title */}
        <h1 className='text-3xl font-bold tracking-wide sm:text-4xl md:text-6xl md:font-black lg:text-7xl'>
          Hello. I'm Snap AI.
        </h1>

        {/* Line 1 */}
        <div className='mt-10 select-none rounded-3xl border border-[#525252] bg-[#161616] p-8'>
          <h2 className='text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl lg:tracking-wide'>
            Unleash creativity
          </h2>
        </div>

        {/* Line 2 */}
        <div className='mt-10 select-none rounded-3xl border border-[#525252] bg-[#161616] p-8'>
          <h2 className='text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl lg:tracking-wide'>
            Generate images
          </h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Intro
