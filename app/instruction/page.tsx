"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import Button from "../components/Button";
import {
  useContractEvent,
  useAccount,
  useContractWrite,
  useContractRead,
} from "wagmi";
import circularJSON from "circular-json";
import { words } from "../smart-contract/constants";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import { TOKEN_CONTRACT_ADDRESS } from "../smart-contract/constants";
import { useMyContext } from "../context/Context";
import CONTRACT_ABI from "../smart-contract/wordanamain-abi.json";
import TOKEN_ABI from "../smart-contract/token-abi.json";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

const Instruction = () => {
  const { data, setData } = useMyContext();
  const account = useAccount();
  const [event, setEvent] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    data: word_of_the_day_Data,
    isLoading: word_of_the_day_Data_Loading,
    isSuccess: word_of_the_day_Data_Started,
    error: word_of_the_day_Day_Error,
    write: _appkey,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getWordOfTheDay",
  });

  const { data: allowanceData, write: allowance } = useContractWrite({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [account, CONTRACT_ADDRESS],
  });

  // console.log(allowanceData)

  // const safeAllowanceData = circularJSON.stringify({
  //   // Convert BigInt value to string
  //   allowanceData: allowanceData.toString(),
  // });

  console.log(allowanceData, "safeAllowanceData");

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "randomNumberProvided",
    listener: (eventNumber) => {
      setEvent(parseInt(eventNumber[0].args.randomNumber));
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (event) {
      setData(words[event]);
      router.push("/startgame");
      setLoading(false);
    }
  }, [event, router]);

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

        {!loading ? (
          <div onClick={allowance} className="mt-8">
            <Button title="Initialize Game"></Button>
          </div>
        ) : (
          <div className="mt-8">
            <Oval
              height="50"
              width="50"
              radius="9"
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
