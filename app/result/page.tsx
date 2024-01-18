import React from 'react'
import Header from '../components/Header'
import Won from '../components/Won'
import Button from '../components/Button'
import Image from 'next/image'
import Link from 'next/link'
import Lost from '../components/Lost'

const Result = () => {
  return (
    <div>
        <Header />
        <div>
            <div className='flex flex-col items-center'>
                {/* <Won />  */}
                <Lost />
                <Link href='/'>
                    <Button title='Back To Home' />
                </Link>
            </div>
            <div className='flex items-center justify-between mt-16 mx-8 mr-16'>
                <Image src='/images/gamelives.svg' alt='lives' height={20} width={223} />
                <div className='flex flex-col items-center'>
                    <p className='retro text-xs'>Score board</p>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='flex items-center gap-3'>
                            <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                            <p className='retro text-xs'>Daniel</p>
                            <p className='retro text-xs'>20</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                            <p className='retro text-xs'>Josh</p>
                            <p className='retro text-xs'>10</p>
                        </div>
                    </div>
                </div>
                <p className='retro text-xs'>TIME: 00:03</p>
            </div>
        </div>
    </div>
  )
}

export default Result