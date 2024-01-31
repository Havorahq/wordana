"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import Button from "../components/Button";
import { useContractEvent, useAccount, useContractWrite } from "wagmi";
import { words } from "../smart-contract/constants";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";

import { useMyContext } from "../context/Context";
import CONTRACT_ABI from "../smart-contract/wordanamain-abi.json";

import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

const Instruction = () => {
  const { setData } = useMyContext();

  const [event, setEvent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { write: _appkey } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getWordOfTheDay",
  });

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "wordOfTheDayReturned",
    listener: (eventNumber) => {
      setEvent(parseInt(eventNumber[0]?.args.wordOfTheDay));
    },
  });

  console.log(event, "word_index");

  const router = useRouter();

  useEffect(() => {
    if (event) {
      setData(words[event]);
      router.push("/startgame");
      setLoading(false);
    }
  }, [event, router, setData]);

  const validateCall = async () => {
    setLoading(true);
    _appkey({
      args: ["password"],
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-12">
        <div className="p-4 border rounded-lg">
          <p className="uppercase retro text-xxs text-primary">Game rules:</p>
          <p className="mt-1 retro leading-relaxed" style={{ fontSize: 8 }}>
            Try guessing the correct word six(5) tries. <br />
            After each try, the tiles changes color to show <br />
            you how close you were to the correct word, you <br />
            get 20 points for each correct word and spot.
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
              W
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
              O
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-primary box transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
              R
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
              D
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
              S
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            Letter R is correct and in the correct spot{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:scale-105">
              R
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:scale-105">
              A
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:scale-105">
              I
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:scale-105">
              N
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-yellow-300 box transition-transform transform-gpu hover:scale-105">
              Y
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            Letter Y is correct and in the Wrong spot{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:translate-y-1 hover:scale-105">
              S
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:translate-y-1 hover:scale-105">
              K
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:translate-y-1 hover:scale-105">
              I
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:translate-y-1 hover:scale-105">
              P
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box transition-transform transform-gpu hover:translate-y-1 hover:scale-105">
              S
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            No letter is in correct or in the right spot{" "}
          </p>
        </div>
        {!loading ? (
          <div onClick={validateCall} className="mt-8">
            <Button title="Initialize Game"></Button>
          </div>
        ) : (
          <div className="mt-8">
            <Oval
              height="50"
              width="50"
              // radius="9"
              color="#45F5A1"
              ariaLabel="loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Instruction;
