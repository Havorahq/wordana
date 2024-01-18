"use client";
import React, { useState, useEffect } from "react";
import WordBox from "./WordBox";
import Button from "../Button";

export interface LetterStatus {
  letter: string;
  status: string;
}

const GameBoard = () => {
  const [wordArray, setWordArray] = useState<LetterStatus[]>([]);
  const [lives, setLives] = useState(6);

  return (
    <div className="mt-[85px]">
      <div>
        <WordBox wordArray={wordArray} />
        <div className="flex items-center mt-6 justify-center">
          <Button title="Submit" />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
