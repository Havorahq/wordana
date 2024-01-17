import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const InvitePlayer = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            <div className='border border-borderGrey p-5 rounded-lg text-sm width'>
                <p>Total Balance</p>
                <p className='my-5'>TLC - 200</p>
                <p>$ 200</p>
            </div>

            <form className='py-5 width'>
                <label className='block mb-2 text-sm text-gray-400'>Enter Player Wallet Address</label>
                <input 
                    className='width border border-borderGrey rounded-lg bg-grey p-2'
                    placeholder='2be112rs455sfrsvv2mnfh'
                />
            </form>
            
            <Button title='Invite Player' />
        </div>
    </div>
  )
}

export default InvitePlayer