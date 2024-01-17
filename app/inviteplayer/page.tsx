import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const InvitePlayer = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-col h-screen items-center gap-3 m-32'>
            <Button title='Invite Player' />
        </div>
    </div>
  )
}

export default InvitePlayer