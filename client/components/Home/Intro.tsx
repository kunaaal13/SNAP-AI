'use client'

import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useState } from 'react'

function Intro() {
  //   const angle = 20

  //   const x = useMotionValue(0.5)
  //   const y = useMotionValue(0.5)

  //   // const rotateX = useTransform(x, [0, 0.5, 1], [-angle, 0, angle])
  //   // if x is greater than 0.5, then rotateX is positive else negative

  //   const rotateX = useTransform(x, (value) => {
  //     // if hovered on left then card must tilt to the left
  //     // if hovered on right then card must tilt to the right
  //     if (value > 0.5) {
  //       return angle
  //     } else if (value == 0.5) {
  //       return 0
  //     } else {
  //       return -angle
  //     }
  //   })
  //   const rotateY = useTransform(y, (value) => {
  //     // if hovered on top then card must tilt to the top
  //     // if hovered on bottom then card must tilt to the bottom
  //     if (value > 0.5) {
  //       return angle
  //     } else if (value == 0.5) {
  //       return 0
  //     } else {
  //       return -angle
  //     }
  //   })

  //   const onMove = (e: any) => {
  //     // get the mouse position
  //     // get position information for the card
  //     // get position information for the card
  //     const bounds = e.currentTarget.getBoundingClientRect()

  //     // set x,y local coordinates
  //     const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
  //     const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight

  //     // update MotionValues
  //     console.log(xValue, yValue)
  //     x.set(xValue, true)
  //     y.set(yValue, true)
  //   }

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const onMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget
    const THRESHOLD = 15

    const horizontal = (clientX - offsetLeft) / clientWidth
    const vertical = (clientY - offsetTop) / clientHeight

    setRotateX(-(THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2))
    setRotateY(-(vertical * THRESHOLD - THRESHOLD / 2).toFixed(2))
  }

  return (
    <div className='w-full my-20 flex justify-center'>
      <motion.div
        onMouseLeave={() => {
          // Reset the rotation
          setRotateX(0)
          setRotateY(0)
        }}
        whileHover={{
          rotateX: rotateX,
          rotateY: rotateY,
          transition: {
            type: 'spring',
            duration: 0.1,
          },
        }}
        style={{
          perspective: 500,
        }}
        onPointerMove={onMove}
        className='w-full h-full md:w-5/6 p-2 lg:px-4 py-10 flex flex-col items-center border'
      >
        {/* Title */}
        <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl md:font-black tracking-wide'>
          Hello. I'm Snap AI.
        </h1>

        {/* Line 1 */}
        <div className='bg-[#161616] mt-10 p-8 rounded-lg border border-[#525252] select-none'>
          <h2 className='text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold lg:tracking-wide'>
            Unleash creativity
          </h2>
        </div>

        {/* Line 2 */}
        <div className='bg-[#161616] mt-10 p-8 rounded-lg border border-[#525252] select-none'>
          <h2 className='text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold lg:tracking-wide'>
            Generate images
          </h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Intro
