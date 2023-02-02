import Main from '@/components/Generate/Main'
import Header from '@/components/Home/Header'

export default function Home() {
  return (
    <div className='overflow-x-hidden p-4 text-white md:p-10'>
      <Header linkTitle='community' />

      <Main />
    </div>
  )
}
