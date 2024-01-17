import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const GameInvites = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen gap-3 m-32'>
            <p className='text-lg retro'>Invites</p>
            <div className='gamemode p-7 flex justify-between items-center cursor-pointer'>
              <div className='flex gap-3'>
                <Image src='/images/avatar.svg' alt='Avatar' width={44} height={44}/>
                <div>
                  <p className='retro text-sm'>JOSH.30TLC</p>
                  <p className='retro text-xs' style={{ fontSize: 8 }}>1 mins ago</p>
                </div>
              </div>

              <p className='retro text-sm'>Join</p>
            </div>
        </div>
    </div>
  )
}

export default GameInvites;