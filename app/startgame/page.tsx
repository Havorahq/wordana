'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import GameBoard from '../components/GameBoard'
import Button from '../components/Button'
import WordInputGrid from '../components/WordInputGrid'
import WordCompareGrid from '../components/WordCompareGrid'

interface Guess{
    wordGuessed: string,
}

const RenderEmptyWordGrid = (props: { numberOfTimes:number }) => {
    const {numberOfTimes} = props
    const renderItems = () => {
      const items = [];
      for (let i = 0; i < numberOfTimes; i++) {
        items.push(<WordInputGrid isActive={false} key={i} />);
      }
      return items;
    };
  
    return <div className='flex flex-col items-center gap-3 m-4 mb-16'>{renderItems()}</div>;
  };

const Game = () => {

    const [wordToGuess, setWordToGuess] = useState('hello')
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState<Guess[]>([])

    const handleSubmission =()=>{
        if (currentGuess.length === 5){
            let prevGuesses = guesses
            const newGuess: Guess = {wordGuessed: currentGuess}
            prevGuesses.push(newGuess)
            setGuesses(prevGuesses)
            setCurrentGuess('')
            console.log(prevGuesses)
        } else{
            alert('submitted word must have 5 letters')
        }
    }

    return (
    <div>
        <Header />
        <div>
            <div className='flex flex-col items-center gap-3 m-4 mb-16'>
                {
                    guesses.map((guess, index)=>(
                        <div key={index}>
                        {index > guesses.length - 6 && <WordCompareGrid wordGuessed={guess.wordGuessed} wordToGuess={wordToGuess}/>}
                        </div>
                    ))
                }
                <WordInputGrid isActive setGuess={setCurrentGuess}/>
                {
                    guesses.length < 6 && <RenderEmptyWordGrid numberOfTimes={6-guesses.length}/>
                }
                <div onClick={()=>handleSubmission()}>
                    <Button title='Submit'/>
                </div>
            </div>
            <GameBoard />
        </div>
    </div>
    )
}

export default Game