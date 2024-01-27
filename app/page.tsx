'use client'

import Image from 'next/image'
import Header from './components/Header'
import Button from './components/Button'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const account = useAccount()
  const notify = () => toast.error("Wallet is not connected!", {
    position: "top-center"
  });
  console.log('Account: ', account)
  return (
    <div>
      <ToastContainer />
      <Header />
      <div className='mt-8 py-12 flex items-center justify-between'>
        <div>
          <p className='text-primary text-xs uppercase font-normal retro' style={{ fontSize: 8.2 }}>Decentralised Gaming</p>
          <p className='text-7xl my-7'>Welcome to <br />Wordana!</p>
          <p className='text-xs font-normal mb-7 retro' style={{ fontSize: 8.2 }}>join the puzzle revolution and earn value in the <br />world of decentralised gaming</p>
          {
            account?.isConnected ?
            <Link href={'/gamemode'}>
              <Button title='Start Playing' />
            </Link> :
            <div onClick={notify}>
              <Button title='Start Playing' />
            </div>
          }
        </div>
        <div>
          <Image src='/images/rubik.svg' alt='rubik' height={494} width={429} />
        </div>
      </div>
    </div>
  )
}
