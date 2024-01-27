"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import Button from "../components/Button";
import { useContractRead, useContractEvent, useContractWrite } from "wagmi";
import { words } from "../smart-contract/constants";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import { useMyContext } from "../context/Context";
import CONTRACT_ABI from "../smart-contract/wordana-contract-abi.json";
import { SINGLE_CONTRACT_ADDRESS } from "../smart-contract/constants";
import { useRouter } from "next/navigation";

import CONTRACT_ABI2 from "../smart-contract/wordana-single-player-abi.json";

const Instruction = () => {
  const { data, setData } = useMyContext();
  const [event, setNewEvent] = useState();
  const {
    isLoading: word_of_the_day_Data_Loading,
    isSuccess: word_of_the_day_Data_Started,
    error: word_of_the_day_Day_Error,
    write: _appkey,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getWordOfTheDay",
  });

  const router = useRouter();

  useEffect(() => {
    if (event) {
      setData(parseInt(event));
      router.push("/startgame");
    }
  }, [event, router]);

  const validateCall = async () => {
    _appkey({
      args: ["password"],
    });
  };

  console.log(event, "word-guess");

  const word_of_the_day = event;

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-12">
        <div className="p-4 border rounded-lg">
          <p className="uppercase retro text-xxs text-primary">Game rules:</p>
          <p className="mt-1 retro leading-relaxed" style={{ fontSize: 8 }}>
            Try guessing the correct word six(6) tries. <br />
            After each try, the tiles changes color to show <br />
            you how close you were to the correct word, you <br />
            get 20 points for each correct word and spot.
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              W
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              O
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-primary box">
              R
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              D
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              S
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            Letter R is correct and in the correct spot{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              R
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              A
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              I
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              N
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-yellow-300 box">
              Y
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            Letter Y is correct and in the Wrong spot{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-3">
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              S
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              K
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              I
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              P
            </div>
            <div className="text-4xl text-black flex items-center justify-center font-bold rounded-lg bg-borderGray box">
              S
            </div>
          </div>
          <p className="retro mt-2" style={{ fontSize: 8 }}>
            No letter is in correct or in the right spot{" "}
          </p>
        </div>

        <div onClick={validateCall}>
          <Button title="Initialize Game"></Button>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
