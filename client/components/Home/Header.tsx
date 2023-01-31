'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const buttonVariant = {
  rest: { display: 'none', ease: 'easeOut', duration: 1, type: 'tween' },
  hover: {
    display: 'inline-flex',
    rotate: 360,
    transition: {
      duration: 1,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

function Header() {
  return (
    <header className='w-full h-16 flex justify-center'>
      <div className='w-full h-full md:w-3/5 border border-[#525252] rounded-full flex items-center justify-between p-4'>
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
            className='flex items-center bg-[#1a6eff] hover:bg-[#0058ef] rounded-full h-10 px-4 space-x-2 cursor-pointer font-semibold'
            initial='rest'
            whileHover='hover'
            animate='rest'
          >
            <h3>Star us</h3>

            <motion.h3 variants={buttonVariant}>⭐️</motion.h3>
          </motion.div>
        </Link>
      </div>
    </header>
  )
}

export default Header
