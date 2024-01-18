"use client";
import React, { useState, useEffect } from "react";
import WordBox from "./WordBox";

export interface LetterStatus {
  letter: string;
  status: string;
}

const GameBoard = () => {
  const [wordArray, setWordArray] = useState<LetterStatus[]>([]);



  return (
    <div>
      <div>
        <WordBox wordArray={wordArray} />
   
      </div>
    </div>
  );
};

export default GameBoard;
