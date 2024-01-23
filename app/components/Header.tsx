import React from 'react'
import Image from 'next/image'
import Button from './Button';
import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <Link href='/' className='cursor-pointer'>
          <Image src='/icons/brandLogo.svg' alt='logo' height={64} width={192} />
        </Link>
        {/* Sign in player */}
        {/* <div className='flex gap-3 items-center'>
          <p className='retro text-xs'>Player:</p>
          <div className='flex gap-3 items-center'>
            <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
            <p className='retro text-xs'>Daniel</p>
          </div>
        </div> */}
        
        <ConnectWalletButton />
    </div>
  )
}

export default Header