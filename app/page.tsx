import Image from 'next/image'
import Header from './components/Header'
import Buttton from './components/Buttton'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='mt-8 py-12 flex items-center justify-between'>
        <div>
          <p className='text-primary text-xs uppercase font-normal retro'>Decentralised Gaming</p>
          <p className='text-7xl my-7 '>Welcome to <br />Wordana!</p>
          <p className='text-xs font-normal mb-7 retro'>join the puzzle revolution and earn value in the <br />world of decentralised gaming</p>
          <Link href='/gamemode'>
            <Buttton title='Start Playing' />
          </Link>
        </div>
        <div>
          <Image src='/images/rubik.svg' alt='rubik' height={494} width={429} />
        </div>
      </div>
    </div>
  )
}
