import Image from 'next/image'
import React from 'react'

const GameBoard = () => {
  return (
    <div className='flex items-center justify-between mt-16 mx-8 mr-16'>
        <Image src='/images/gamelives.svg' alt='lives' height={20} width={223} />
        <div className='flex flex-col items-center'>
            <p className='retro text-xs'>Score board</p>
            <div className='flex items-center gap-3 mt-2'>
                <div className='flex items-center gap-3'>
                    <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                    <p className='retro text-xs'>Daniel</p>
                    <p className='retro text-xs'>20</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                    <p className='retro text-xs'>Josh</p>
                    <p className='retro text-xs'>10</p>
                </div>
            </div>
        </div>
        <p className='retro text-xs'>TIME: 00:03</p>
    </div>
  )
}

export default GameBoard