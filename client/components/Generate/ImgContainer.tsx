'use client'

import downloadImage from '@/utils/downloadImage'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

type Props = {
  image: string
  prompt: string
}

function ImgContainer({ image, prompt }: Props) {
  const shareWithCommunity = async () => {
    // check if both prompt and image are empty or not
    if (prompt === '' || image === '') {
      // input is empty so return an error toast
      toast.error('Please generate an image first')
      return
    }

    // check if env variables are set or not
    if (process.env.NEXT_PUBLIC_API_BASE_URL === undefined) {
      toast.error(`error connecting to server`)
      return
    }

    // Make an API request to the server
    const loading = toast.loading('Sharing with community... 👷🏻‍♂️')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/post/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          photo: image,
          name: 'Anonymous',
        }),
      })

      const data = await res.json()

      // dismiss the loading toast
      toast.dismiss(loading)

      // check if the request was successful or not
      if (data.success) {
        // request was successful so return a success toast
        toast.success('Shared with community! 🎉')
      } else {
        // request was not successful so return an error toast
        toast.error('OOPSIE WOOPSIE!! Sever is sleeping 😴')
      }

      console.log(data)
    } catch (err) {
      // dismiss the loading toast
      toast.dismiss(loading)

      // error occured so return an error toast
      toast.error('OOPSIE WOOPSIE!! Sever is sleeping 😴')
    }
  }

  const download = async () => {
    // download the image
    downloadImage(image)
  }

  return (
    <AnimatePresence>
      <motion.div
        key={image}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className='my-10 flex w-full flex-col items-center justify-between md:flex-row'
      >
        <motion.div className='w-full rounded-md border md:w-2/5'>
          <img src={image} alt='generated' className='w-full rounded-md' />
        </motion.div>

        {/* Share With Community */}
        <div className='mt-10 flex w-full flex-col items-center space-y-7 md:mt-0 md:w-3/5'>
          <h3 className='text-center font-semibold md:text-xl'>{prompt}</h3>

          <div className='flex items-center justify-center space-x-4'>
            <motion.div
              whileHover={{ borderColor: '#1a6eff' }}
              transition={{ duration: 0.2 }}
              onClick={shareWithCommunity}
              className='cursor-pointer rounded-full  border bg-transparent px-5 py-2 text-base font-semibold md:text-lg'
            >
              Share
            </motion.div>

            {/* Download */}
            <div
              onClick={download}
              className='cursor-pointer rounded-full bg-[#1a6eff] px-5 py-2 text-base font-semibold hover:bg-[#0058ef] md:text-lg'
            >
              Download
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImgContainer
