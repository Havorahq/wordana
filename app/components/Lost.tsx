import Image from 'next/image'
import React from 'react'

const Lost = () => {
  return (
    <div className='flex flex-col items-center gap-3 m-28 mb-16'>
        <Image src='/images/sadface.gif' alt='vector' width={154} height={154} />
        <div className='flex items-center gap-2 mt-8'>
            <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
            <p className='retro text-xs'>YOU LOST!</p>
        </div>
    </div>
  )
}

export default Lost