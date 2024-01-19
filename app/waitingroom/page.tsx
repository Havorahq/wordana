import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const WaitingRoom = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            <Image src='/images/hourglass.gif' alt='vector' width={267} height={267} />
            <p className='retro text-xs'>Waiting for player 2...</p>
        </div>
    </div>
  )
}

export default WaitingRoom