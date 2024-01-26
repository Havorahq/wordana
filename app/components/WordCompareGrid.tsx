"use client";

import { useState, useRef } from "react";

interface WordInputGridProps {
  wordGuessed: string;
  wordToGuess: string;
}

const WordCompareGrid: React.FC<WordInputGridProps> = ({
  wordGuessed,
  wordToGuess,
}) => {
  console.log({ wordGuessed, wordToGuess });

  const boxStyle =
    "flex justify-center items-center rounded-lg border w-[70px] h-[70px] uppercase text-black";
  const wrongLetterStyle = boxStyle + " bg-white";
  const rightLetterWrongPositionStyle = boxStyle + " bg-yellow-500 border-0";
  const rightLetterRightPositionStyle = boxStyle + " bg-green-500 border-0";
  const word = wordGuessed;

  const getStyle = (index: number): string => {
    let style: string = "";
    if (wordGuessed.charAt(index) === wordToGuess.charAt(index)) {
      style = rightLetterRightPositionStyle;
    } else if (wordToGuess.indexOf(wordGuessed.charAt(index)) !== -1) {
      style = rightLetterWrongPositionStyle;
    } else {
      style = wrongLetterStyle;
    }
    return style;
  };

  return (
    <div>
      <div className="flex w-full justify-between gap-3">
        <p className={getStyle(0)}>{word.charAt(0)}</p>
        <p className={getStyle(1)}>{word.charAt(1)}</p>
        <p className={getStyle(2)}>{word.charAt(2)}</p>
        <p className={getStyle(3)}>{word.charAt(3)}</p>
        <p className={getStyle(4)}>{word.charAt(4)}</p>
      </div>
    </div>
  );
};

export default WordCompareGrid;
