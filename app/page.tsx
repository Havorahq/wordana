import Image from 'next/image'
import Header from './components/Header'
import Buttton from './components/Buttton'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='mt-8 py-12 flex items-center justify-between'>
        <div>
          <p className='text-primary text-base uppercase font-normal'>Decentralised Gaming</p>
          <p className='text-7xl my-7'>Welcome to <br />Wordana!</p>
          <p className='text-base uppercase font-normal mb-7'>join the puzzle revolution and earn value in the <br />world of decentralised gaming</p>
          <Buttton title='Start Playing' />
        </div>
        <div>
          <Image src='/images/rubik.svg' alt='rubik' height={494} width={429} />
        </div>
      </div>
    </main>
  )
}
