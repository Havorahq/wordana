import React from 'react'
import Header from './components/Header'
import Image from 'next/image'

const Loading = () => {
  return (
    <div>
        <Header />
        <div className='flex items-center justify-center h-screen w-full mb-9'>
            <Image src='/icons/brandLogo.svg' alt='logo' height={202} width={592} className='mb-9' />      
        </div>
    </div>
  )
}

export default Loading