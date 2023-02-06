'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  // when the component is in view it should be scaled to 1 else scale down to 0.5
  visible: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
  hidden: {
    scale: 0.5,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

function Description() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <motion.div
        variants={containerVariants}
        whileInView='visible'
        animate='hidden'
        className='flex h-full flex-col items-center space-y-16 p-2 py-10 md:w-3/5 lg:px-4'
      >
        {/* Description */}
        <h1 className='text-3xl font-bold tracking-wide sm:text-4xl md:text-6xl md:font-black lg:text-7xl'>
          My Work
        </h1>

        <h2 className='mx-2 text-center text-lg font-light leading-10 text-[#c6c6c6] md:text-xl lg:text-2xl'>
          Unleash your creativity with me, the revolutionary new AI tool that
          generates beautiful images from your prompts.
        </h2>
      </motion.div>
    </main>
  )
}

export default Description
