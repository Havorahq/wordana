import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const Stake = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            <div className='border border-borderGrey p-5 rounded-lg text-sm width'>
                <p>Total Balance</p>
                <p className='my-5'>WRD - 200</p>
                <p className='text-gray-400'>$ 200</p>
            </div>

            <form className='py-5 width'>
                <label className='block mb-2 text-sm text-gray-400'>Amount of WRD to stake</label>
                <input 
                    className='width border border-borderGrey rounded-lg bg-grey p-2'
                    placeholder='10'
                />
                <p className='text-xs mt-1 text-gray-400'>You will have 190 remaining</p>
            </form>
            
            <Button title='Stake WRD' />
        </div>
    </div>
  )
}

export default Stake