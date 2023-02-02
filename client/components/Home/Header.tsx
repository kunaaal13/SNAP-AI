'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const buttonVariant = {
  rest: { display: 'none', ease: 'easeOut', duration: 0.8, type: 'tween' },
  hover: {
    display: 'inline-flex',
    translateX: 10,
    translateY: -5,
    transition: {
      duration: 0.8,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const HeaderVariants = {
  initial: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    },
  },
}

function Header() {
  return (
    <header className='flex h-16 w-full justify-center'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={HeaderVariants}
        className='flex h-full w-full items-center justify-between rounded-full border border-[#525252] p-4 md:w-3/5'
      >
        {/* Logo */}
        <Image
          src='/Logo.svg'
          width={32}
          height={32}
          alt='Logo'
          className='cursor-pointer'
          priority
        />

        {/* Star us on Github */}
        <Link href={'https://github.com/kunaaal13/SNAP-AI'}>
          <motion.div
            className='flex h-10 cursor-pointer items-center space-x-2 rounded-full bg-[#1a6eff] px-6 font-semibold hover:bg-[#0058ef]'
            initial='rest'
            whileHover='hover'
            animate='rest'
          >
            <h3>Generate</h3>

            <motion.h3 variants={buttonVariant}>🚀</motion.h3>
          </motion.div>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
