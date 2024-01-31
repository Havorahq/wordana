
"use client";

import React from 'react'
import Header from '../components/Header'
import Won from '../components/Won'
import Button from '../components/Button'
import Image from 'next/image'
import Link from 'next/link'
import Lost from '../components/Lost'
import GameBoard from '../components/GameBoard'

const Result = () => {
  return (
    <div>
        <Header />
        <div>
            <div className='flex flex-col items-center'>
                <Won /> 
                <Link href='/'>
                    <Button title='Back To Home' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Result;
