import Connect from '@/components/Home/Connect'
import Description from '@/components/Home/Description'
import ExampleContainer from '@/components/Home/ExampleContainer'
import Header from '@/components/Home/Header'
import Intro from '@/components/Home/Intro'

export default function Home() {
  return (
    <div className='overflow-x-hidden p-4 text-white md:p-10'>
      <div className='flex min-h-screen flex-col'>
        <Header linkTitle='generate' />
        <Intro />
      </div>

      <Description />

      <ExampleContainer />

      <Connect />
    </div>
  )
}
