"use client";

import React from "react";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Button from "../components/Button";

import {
  useAccount,
  useConnect,
  //   useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";

import { SINGLE_CONTRACT_ADDRESS } from "../smart-contract/constants";

import CONTRACT_ABI2 from "../smart-contract/wordanamain2-abi.json";

const Game = () => {
  const {
    data: stakeData,
    write: guessWord,
    isLoading: isStakeLoading,
    isSuccess: isStakeStarted,
    error: stakeError,
  } = useContractWrite({
    address: SINGLE_CONTRACT_ADDRESS,
    abi: CONTRACT_ABI2,
    functionName: "guessWord",
  });

  console.log(stakeData);

  const submitWord = async () => {
    guessWord({
      args: ["water"],
    });
  };
  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-col items-center gap-3 m-4 mb-16">
          <div className="flex items-center mt-2 gap-3">
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
          </div>
          <div className="flex items-center mt-2 gap-3">
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
          </div>
          <div className="flex items-center mt-2 gap-3">
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
          </div>
          <div className="flex items-center mt-2 gap-3">
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
          </div>
          <div className="flex items-center mt-2 mb-2 gap-3">
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
            <input className="box rounded-lg bg-transparent border p-6 uppercase" />
          </div>
          <div onClick={submitWord}>
            <Button title="Submit" />
          </div>
        </div>
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
