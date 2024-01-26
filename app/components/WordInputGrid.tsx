'use client'

import { useState, useRef, Dispatch, SetStateAction, useEffect } from "react"

interface WordInputGridProps {
    isActive: boolean,
    setGuess?: Dispatch<SetStateAction<string>>,
    guess: string
}

const WordInputGrid: React.FC<WordInputGridProps> =({isActive, setGuess, guess})=> {
                                                                                                                                                               
    const inputRef = useRef<HTMLInputElement>(null);

    const inactivBoxStyle = 'flex justify-center items-center rounded-lg bg-transparent border w-[70px] h-[70px] uppercase'
    const activeBoxStyle = inactivBoxStyle + ' border-green-500'
    const boxStyle = isActive? activeBoxStyle : inactivBoxStyle

    const handleClick =()=>{
        if (isActive && inputRef.current !== undefined && inputRef.current){
            inputRef.current.focus()
        }
    }

    return (
    <div>
        {
            isActive? (
                <div>
                    <div className="flex w-full justify-between gap-3" onClick={handleClick}>
                        <p className={boxStyle}>{guess.charAt(0)}</p>
                        <p className={boxStyle}>{guess.charAt(1)}</p>
                        <p className={boxStyle}>{guess.charAt(2)}</p>
                        <p className={boxStyle}>{guess.charAt(3)}</p>
                        <p className={boxStyle}>{guess.charAt(4)}</p>
                    </div>
                <input type="text" className="text-black fixed top-0 right-0 opacity-0"  maxLength={5} value={guess} 
                    onChange={(e)=>{
                        if (setGuess){
                            setGuess(e.target.value)
                        }
                    }} 
                    ref={inputRef}/>
                </div>
            ):(
                <div className="flex w-full justify-between gap-3">
                    <div className={boxStyle}/>
                    <div className={boxStyle}/>
                    <div className={boxStyle}/>
                    <div className={boxStyle}/>
                    <div className={boxStyle}/>
                </div>
            )
        }
        
    </div>
    )
}

export default WordInputGrid;