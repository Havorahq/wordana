import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Link from 'next/link'


const Reward = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col items-center h-screen gap-3 m-36'>
            <p className='text-lg retro text-center mb-16'>The reward will be credited to your account shortly</p>
            <Link href='/gamemode'>
                <Button title='Play again' />
            </Link>
        </div>
    </div>
  )
}

export default Reward