"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

import {
  CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "../smart-contract/constants";
import CONTRACT_ABI from "../smart-contract/wordanamain-abi.json";
import TOKEN_ABI from "../smart-contract/token-abi.json";
import Web3 from "web3";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useBalance,
} from "wagmi";
import { useMyContext } from "../context/Context";
import { BigNumber } from "bignumber.js";

import { ethers } from "ethers";

const Stake = () => {
  const { data } = useMyContext();
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any | null>(null);
  const [token, setToken] = useState<string>("");
  //Stake Function
  const {
    data: createGameData,
    write: createGameInstance,
    isLoading: isStakeLoading,
    isSuccess: isStakeStarted,
    error: stakeError,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "createGameInstance",
  });

  console.log(createGameData, "createGameData");

  const { address } = useAccount();

  const result = useBalance({
    address,
    token: TOKEN_CONTRACT_ADDRESS,
  });

  const balance = result.data?.formatted;

  const { data: approveData, write: allowanceWrite } = useContractWrite({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "approve",
    args: [CONTRACT_ADDRESS, new BigNumber(100).integerValue().toString()],
  });

  console.log("approveData", approveData);
  const { data: allowanceData }: { data: any } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [address, CONTRACT_ADDRESS],
  });

  const bigintValue = new BigNumber(allowanceData);
  const realTokenValue = bigintValue.div(BigNumber(10).exponentiatedBy(18));
  const displayValue = realTokenValue.toNumber();
  console.log(displayValue, "safeAllowanceData");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setToken(value);
  };

  const stakeTokens = async () => {
    createGameInstance({
      args: [data, ethers.utils.parseEther(token)],
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-32">
        <p className="uppercase retro text-xxs text-primary">
          Allowance = {displayValue}
        </p>
        <p className="uppercase retro text-xxs text-primary">
          TOTAL BALANCE : {balance} WORDANA
        </p>

        <p>Transaction will fail if there is not enough Allowance or Balance</p>

        <form className="py-5 width">
          <label className="block mb-2 text-sm text-gray-400">
            Amount of WRD to stake
          </label>
          <input
            className="width border border-borderGrey rounded-lg bg-grey p-2"
            placeholder="10"
            name="token"
            value={token}
            onChange={handleChange}
          />
          <p className="text-xs mt-1 text-gray-400">
            You will have {balance - token} remaining
          </p>
        </form>
        <div onClick={stakeTokens}>
          <Button title="Stake WRD" />
        </div>
      </div>
    </div>
  );
};

export default Stake;
