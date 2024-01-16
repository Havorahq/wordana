import React from 'react'
import Image from 'next/image'
import Button from './Button';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <Image src='/icons/brandLogo.svg' alt='logo' height={64} width={192} />
        <Button title='Connect Wallet'/>
    </div>
  )
}

export default Header