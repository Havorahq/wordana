"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Button from "../components/Button";
import WordInputGrid from "../components/WordInputGrid";
import WordCompareGrid from "../components/WordCompareGrid";
import { useMyContext } from "../context/Context";
import { useRouter } from "next/navigation";
interface Guess {
  wordGuessed: string;
}

const RenderEmptyWordGrid = (props: { numberOfTimes: number }) => {

  const { numberOfTimes } = props;
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < numberOfTimes; i++) {
      items.push(<WordInputGrid isActive={false} key={i} />);
    }
    return items;
  };

  return (
    <div className="flex flex-col items-center gap-3 m-4 mb-16">
      {renderItems()}
    </div>
  );
};

const Game = () => {
  const router = useRouter();
  const { data: wordToGuess, setData } = useMyContext();
  console.log(wordToGuess, "wordToGuess_in_game_page");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [guessesMade, setGuessesMade] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  useEffect(()=>{
    console.log(guessesMade, 'gmade')
    if (guessesMade === 6 && !gameWon){
      // redirect to fail screen
      router.push('/lost')
      
    }
  }, [guessesMade, router, gameWon])

  const handleSubmission = () => {
    if (currentGuess.length === 5) {
      if (currentGuess === wordToGuess){
        // redirect to won screen
        router.push('/result')
        setGameWon(true)
      }
      let prevGuesses = guesses;
      const newGuess: Guess = { wordGuessed: currentGuess };
      prevGuesses.push(newGuess);
      setGuesses(prevGuesses);
      setCurrentGuess("");
      setGuessesMade(preVal => preVal + 1)
    } else {
      alert("submitted word must have 5 letters");
    }
  };

  return (
    <div>
      <Header />
      <div className="overflow-y-scroll over">
        <div className="flex flex-col items-center gap-3 m-4 mb-0">
          {guesses.map((guess, index) => (
            <div key={index}>
              {index > guesses.length - 6 && (
                <WordCompareGrid
                  wordGuessed={guess.wordGuessed}
                  wordToGuess={wordToGuess}
                />
              )}
            </div>
          ))}
          <div className="mb-0" style={{ marginBottom: -45 }}>
            <WordInputGrid
              isActive
              setGuess={setCurrentGuess}
              guess={currentGuess}
            />
            {guesses.length < 6 && (
              <RenderEmptyWordGrid numberOfTimes={5 - guesses.length} />
            )}
          </div>
          <div onClick={() => handleSubmission()} className="mt-0">
            <Button title="Submit" />
          </div>
        </div>
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
