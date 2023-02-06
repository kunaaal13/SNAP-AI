'use client'

import { VscMail, VscTwitter } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  // when the component is in view it should be scaled to 1 else scale down to 0.5
  visible: {
    scale: 1,
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

const starVariant = {
  rest: { display: 'none', ease: 'easeOut', duration: 0.8, type: 'tween' },
  hover: {
    display: 'inline-flex',
    rotate: 360,
    transition: {
      duration: 0.8,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const starContainerVariant = {
  rest: {},
  hover: {
    border: '2px solid white',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

function Connect() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <motion.div
        variants={containerVariants}
        whileInView='visible'
        initial='hidden'
        className='flex w-full flex-col items-center justify-center md:w-3/5'
      >
        <h1 className='text-3xl font-bold tracking-wide sm:text-4xl md:text-6xl md:font-black lg:text-7xl'>
          Let's Connect
        </h1>

        <h2 className='my-10 text-center text-xl font-light leading-10 text-[#c6c6c6] md:text-2xl'>
          Want to join me in my journey? Show some love and connect with
          Kunaaal!
        </h2>

        <div className='flex w-full items-center justify-center space-x-6'>
          {/* Twitter */}
          <Link href={'https://twitter.com/kunaaal13'}>
            <motion.div
              whileHover={{
                backgroundColor: '#0058ef',
              }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className='flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-[#1a6eff] py-4 px-6'
            >
              <VscTwitter className='text-xl text-white sm:text-2xl' />
              <p className='text-base sm:text-lg md:text-xl'>Twitter</p>
            </motion.div>
          </Link>

          {/* Email */}
          <Link href={'mailTo:mrkunalyadav7@gmail.com'}>
            <motion.div
              whileHover={{
                borderColor: '#1a6eff',
              }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className='flex cursor-pointer items-center justify-center space-x-2 rounded-full border-2 border-white py-4 px-6'
            >
              <VscMail className='text-xl text-white sm:text-2xl' />
              <p className='text-base sm:text-lg md:text-xl'>E-mail</p>
            </motion.div>
          </Link>
        </div>

        {/* Star Me on Github */}
        <Link href={'https://github.com/kunaaal13/SNAP-AI'}>
          <motion.div
            variants={starContainerVariant}
            whileHover='hover'
            initial='rest'
            animate='rest'
            className='my-8 flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-[#383838] py-4 px-6 hover:bg-transparent'
          >
            <h3 className='text-base sm:text-lg md:text-xl'>Star Me</h3>

            <motion.h3 variants={starVariant} className='text-xl md:text-2xl'>
              ⭐
            </motion.h3>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Connect
