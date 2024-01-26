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
  useConnect,
  //   useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";

const Stake = () => {
  //   const { data: address } = useMyContext();
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any | null>(null);
  const [token, setToken] = useState<string>("");
  //Stake Function
  const {
    data: stakeData,
    write: createGameInstance,
    isLoading: isStakeLoading,
    isSuccess: isStakeStarted,
    error: stakeError,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "createGameInstance",
  });

  const { address } = useAccount();

  const {
    data: approvaleData,
    isLoading: approvalLoading,
    isSuccess: approvalStarted,
    error: arrovalError,
  } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    functionName: "allowance",
    args: [address, CONTRACT_ADDRESS],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setToken(value);
  };

  const stakeTokens = async () => {
    createGameInstance({
      args: [address, ethers.utils.parseEther(token)],
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-32">
        <div className="border border-borderGrey p-5 rounded-lg text-sm width">
          <p>Total Balance</p>
          <p className="my-5">WRD - 200</p>
          <p className="text-gray-400">$ 200</p>
        </div>

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
            You will have 190 remaining
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
