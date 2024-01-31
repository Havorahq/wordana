import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaHeartBroken } from "react-icons/fa";

interface GameBoardProps {
    guessesMade: number;
    pathname?: string;
}

const GameBoard: React.FC<GameBoardProps> = ({ guessesMade, pathname }) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
          setMinutes((prevMinutes) => (seconds === 59 ? prevMinutes + 1 : prevMinutes));
        }, 1000);
    
        return () => clearInterval(interval);
      }, [seconds]);

    return (
        <div className='flex items-center justify-between mt-4 mx-8 mr-16'>
            {/* <Image src='/images/gamelives.svg' alt='lives' height={20} width={223} /> */}
            <div className='flex items-center gap-4'>
                {guessesMade > 4  ? <FaHeartBroken color='#aca8a879' size={24} /> : <FaHeart color='#EB5857' size={24} />}
                {guessesMade > 3 ? <FaHeartBroken color='#aca8a879' size={24} /> : <FaHeart color='#EB5857' size={24} />}
                {guessesMade > 2 ? <FaHeartBroken color='#aca8a879' size={24} /> : <FaHeart color='#EB5857' size={24} />}
                {guessesMade > 1 ? <FaHeartBroken color='#aca8a879' size={24} /> : <FaHeart color='#EB5857' size={24} />}
                {guessesMade > 0 ? <FaHeartBroken color='#aca8a879' size={24} /> : <FaHeart color='#EB5857' size={24} />}
            </div>
            <div className='flex flex-col items-center'>
                <p className='retro text-xs'>Score board</p>
                <div className='flex items-center gap-3 mt-2'>
                    <div className='flex items-center gap-3'>
                        <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                        <p className='retro text-xs'>Daniel</p>
                        <p className='retro text-xs'>20</p>
                    </div>
                    {pathname !== '/startgame' ?
                     <div className='flex items-center gap-3'>
                        <Image src='/images/user-avatar.svg' alt='Avatar' height={30} width={30} />
                        <p className='retro text-xs'>Josh</p>
                        <p className='retro text-xs'>10</p>
                    </div>
                    :
                    <div></div>
                    }
                </div>
            </div>
            <p className='retro text-xs'>TIME: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
        </div>
    )
}

export default GameBoard