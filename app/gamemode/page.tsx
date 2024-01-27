'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Image from 'next/image'
import Link from 'next/link'

const GameMode = () => {
  const [href, setHref] = useState("")

  return (
    <div>
        <Header />
        <div className='flex flex-col items-center h-screen gap-3 m-32'>
            <div className='flex items-center justify-center gap-5 w-full mb-9'>
                <div 
                  className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md ${href === '/instruction' ? 'activeMode' : ''}`}
                  onClick={() => setHref('/instruction')}
                >
                  <Image src='/images/singlePlayer.svg' alt='Single player' width={72} height={72}/>
                  <p>Single Player</p>
                </div>
                {/* <div 
                  className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md ${href === '/inviteplayer' ? 'activeMode' : ''}`} 
                  onClick={() => setHref('/inviteplayer')}
                >
                  <Image src='/images/invite.svg' alt='Single player' width={72} height={72} className='mb-1 mt-3'/>
                  <p className='mt-3'>Invite Player</p>
                </div>
                <div 
                  className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md ${href === '/gameinvites' ? 'activeMode' : ''}`} 
                  onClick={() => setHref('/gameinvites')}
                >
                  <Image src='/images/puzzle.svg' alt='Single player' width={72} height={72}/>
                  <p>Join Game</p>
                </div> */}
            </div>
            <Link href={href}>
              <Button title='Continue'/>
            </Link>
        </div>
    </div>
  )
}

export default GameMode