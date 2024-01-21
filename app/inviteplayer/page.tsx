import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Link from 'next/link'

const InvitePlayer = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            {/* <div className='border border-borderGrey p-5 rounded-lg text-sm width'>
                <p>Total Balance</p>
                <p className='my-5'>WRD - 200</p>
                <p className='text-gray-400'>$ 200</p>
            </div> */}

            <form className='py-5 width'>
                <label className='block mb-2 text-sm text-gray-400'>Enter Player Wallet Address</label>
                <input 
                    className='width border border-borderGrey rounded-lg bg-grey p-2'
                    placeholder='2be112rs455sfrsvv2mnfh'
                />
            </form>
            <Link href='/stake'>
                <Button title='Invite Player' />
            </Link> 
        </div>
    </div>
  )
}

export default InvitePlayer