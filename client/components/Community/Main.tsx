'use client'

import ImageCard from './ImageCard'

type Props = {
  res: {
    success: boolean
    data: image[]
  }
}

function Main({ res }: Props) {
  const { success, data } = res

  // if (!success) return error
  if (!success) return <div>No images to show 😩</div>

  return (
    <div className='my-20 flex w-full items-center justify-center'>
      <div className='w-full columns-1 gap-8 sm:columns-2 md:w-5/6 md:columns-3 lg:columns-4'>
        {data.map((image, i) => (
          <ImageCard image={image} key={image._id} />
        ))}
      </div>
    </div>
  )
}

export default Main
