"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Button from "../components/Button";
import WordInputGrid from "../components/WordInputGrid";
import WordCompareGrid from "../components/WordCompareGrid";
import { useMyContext } from "../context/Context";
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
  const { data: wordToGuess, setData } = useMyContext();
  console.log(wordToGuess, "wordToGuess_in_game_page");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [guessesMade, setGuessesMade] = useState(0)

  useEffect(()=>{
    if (guessesMade > 6){
      // redirect to fail screen
      console.log('fail')
    }
  }, [guessesMade])

  const handleSubmission = () => {
    if (currentGuess.length === 5) {
      if (currentGuess === wordToGuess){
        // redirect to won screen
        console.log('success')
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
      <div>
        <div className="flex flex-col items-center gap-3 m-4 mb-16">
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
          <WordInputGrid
            isActive
            setGuess={setCurrentGuess}
            guess={currentGuess}
          />
          {guesses.length < 6 && (
            <RenderEmptyWordGrid numberOfTimes={5 - guesses.length} />
          )}
          <div onClick={() => handleSubmission()}>
            <Button title="Submit" />
          </div>
        </div>
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
