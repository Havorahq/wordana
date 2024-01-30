"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Button from "../components/Button";
import WordInputGrid from "../components/WordInputGrid";
import WordCompareGrid from "../components/WordCompareGrid";
import { useMyContext } from "../context/Context";
import { useRouter } from "next/navigation";
import { words } from "../smart-contract/constants";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import CONTRACT_ABI from "../smart-contract/wordanamain-abi.json";
import Waiting from "../components/Waiting";
import { Oval } from "react-loader-spinner";
import { useContractWrite, useContractEvent } from "wagmi";
import MultiplayerWinner from "../components/MultiplayerWinner";

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
  const data = useMyContext();
  const player1Address = data.data.player1Address;
  const player2Address = data.data.player2Address;
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [guessesMade, setGuessesMade] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [wordToGuess, setWordToGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("in progress");
  const [loading, setLoading] = useState(false);
  const done = useRef(false);
  const opponentDone = useRef(false);
  const hasBeenWaiting = useRef(false);
  const [waitingForResult, setWaitingForResult] = useState(false);
  const [message, setMessage] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const gameConcluded = useRef(false);
  const [winner, setWinner] = useState("");

  console.log(data, "data", wordToGuess, "wordToGuess");

  const { write: submitScore } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "recordGame",
  });

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "playerScoreChanged",
    listener: (eventNumber) => {
      const address1 = eventNumber[0]?.args?.player1Address;
      console.log(address1, player1Address, done, "the address");
      console.log("waiting...");
      if (
        address1 === player1Address &&
        done.current &&
        !opponentDone.current
      ) {
        if (hasBeenWaiting.current) {
          if (!gameConcluded.current) {
            setGameStatus("waiting");
            setWaitingForResult(true);
          }
        } else {
          hasBeenWaiting.current = true;
          setGameStatus("waiting");
        }
      } else if (
        address1 === player1Address &&
        !done.current &&
        !opponentDone.current
      ) {
        opponentDone.current = true;
      } else if (
        address1 === player1Address &&
        done.current &&
        opponentDone.current
      ) {
        setGameStatus("waiting");
        setWaitingForResult(true);
        console.log("to announce winner");
      }
    },
  });

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "gameWon",
    listener: (eventNumber) => {
      const address1 = eventNumber[0]?.args?.player1Address;
      const winnerAddress = eventNumber[0]?.args?.winnerAddress;
      setWinner(eventNumber[0]?.args?.winnerAddress);
      if (address1 === player1Address) {
        if (winnerAddress === player1Address) {
          setMessage("player 1 won");
        } else {
          setMessage("player 2 won");
        }
        setGameStatus("view result");
        gameConcluded.current = true;
      }
    },
  });

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "gameDrawn",
    listener: (eventNumber) => {
      const address1 = eventNumber[0]?.args?.player1Address;
      if (address1 === player1Address) {
        setMessage("it's a draw");
        setGameStatus("view result");
        setIsDraw(true);
      }
    },
  });

  const submitGame = (guessIndex: number) => {
    submitScore({
      args: [player1Address, guessIndex, "password"],
    });
  };

  useEffect(() => {
    const wordIndex = data.data.wordToGuess;
    console.log(words[wordIndex]);
    setWordToGuess(words[wordIndex]);
  }, [data.data.wordToGuess]);

  useEffect(() => {
    if (guessesMade === 5 && !gameWon) {
      // you're done!
      done.current = true;
      setLoading(true);
      submitGame(6);
    }
  }, [guessesMade, gameWon, data]);

  const handleSubmission = () => {
    if (currentGuess.length === 5) {
      if (currentGuess === wordToGuess) {
        setLoading(true);
        done.current = true;
        console.log(done);
        // call the recordGame Function
        submitGame(guessesMade);
        // move to waiting screen
        // setGameStatus('waiting')
        //
      }
      let prevGuesses = guesses;
      const newGuess: Guess = { wordGuessed: currentGuess };
      prevGuesses.push(newGuess);
      setGuesses(prevGuesses);
      setCurrentGuess("");
      setGuessesMade((preVal) => preVal + 1);
    } else {
      alert("submitted word must have 5 letters");
    }
  };

  return (
    <div>
      {gameStatus === "in progress" && (
        <div>
          <Header />
          <div className="overflow-y-scroll over">
            <div className="flex flex-col items-center gap-3 m-4 mb-0">
              {guesses.map((guess, index) => (
                <div key={index}>
                  {index > guesses.length - 5 && (
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
                {guesses.length < 4 && (
                  <RenderEmptyWordGrid numberOfTimes={4 - guesses.length} />
                )}
              </div>
              {loading ? (
                <div className="mt-8 flex flex-col items-center space-y-4">
                  <Oval
                    height="50"
                    width="50"
                    // radius="9"
                    color="#45F5A1"
                    ariaLabel="loading"
                  />
                  <p>submitting your results</p>
                </div>
              ) : (
                <div onClick={() => handleSubmission()} className="mt-0">
                  <Button title="Submit" />
                </div>
              )}
            </div>
            <GameBoard />
          </div>
        </div>
      )}

      {gameStatus === "waiting" && (
        <Waiting waitingForResult={waitingForResult} />
      )}

      {gameStatus === "view result" && (
        <MultiplayerWinner
          message={message}
          isDraw={isDraw}
          id={player1Address}
          winner={winner}
        />
      )}
    </div>
  );
};

export default Game;
