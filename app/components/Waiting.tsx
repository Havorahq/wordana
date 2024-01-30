import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const Waiting = (props:{waitingForResult: boolean}) => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            <Image src='/images/hourglass.gif' alt='vector' width={267} height={267} />
            {
                props.waitingForResult? (
                    <p className='retro text-xs'>Computing reuslts...</p>
                ):(
                    <p className='retro text-xs'>Waiting for your opponent to finish...</p>
                )
            }
        </div>
    </div>
  )
}

export default Waiting