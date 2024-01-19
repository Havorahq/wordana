import React from 'react'
import Header from '../components/Header'
import GameBoard from '../components/GameBoard'
import Button from '../components/Button'

const Game = () => {
  return (
    <div>
        <Header />
        <div>
            <div className='flex flex-col items-center gap-3 m-4 mb-16'>
                <div className='flex items-center mt-2 gap-3'>
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                </div>
                <div className='flex items-center mt-2 gap-3'>
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                </div>
                <div className='flex items-center mt-2 gap-3'>
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                </div>
                <div className='flex items-center mt-2 gap-3'>
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                </div>
                <div className='flex items-center mt-2 mb-2 gap-3'>
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                    <input className='box rounded-lg bg-transparent border p-6 uppercase' />
                </div>
                <Button title='Submit'/>
            </div>
            <GameBoard />
        </div>
    </div>
  )
}

export default Game