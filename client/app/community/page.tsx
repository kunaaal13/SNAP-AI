import Main from '@/components/Community/Main'
import Header from '@/components/Home/Header'
import getImages from '@/utils/getImages'

export default async function Home() {
  const res = await getImages()

  return (
    <div className='overflow-x-hidden p-4 text-white md:p-10'>
      <Header linkTitle='generate' />

      <Main res={res} />
    </div>
  )
}
