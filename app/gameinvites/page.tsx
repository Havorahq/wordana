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

const GameInvites = () => {
    // const { data } = useMyContext();
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [contract, setContract] = useState<any | null>(null);
    const [invitePlayer, setInvitePlayer] = useState<string>("");
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
  
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInvitePlayer(value);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setToken(value);
    };
  
    const stakeTokens = async () => {
      createGameInstance({
        args: [invitePlayer, ethers.utils.parseEther(token)],
      });
    };
  
    const increaseCap = async () => {
      console.log('Cap increased')
    }
    return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-32">
        <div>
          <p className="uppercase retro text-sm text-primary">
            Allowance = {displayValue || 0}
          </p>
          <p className="uppercase retro text-sm text-primary">
            TOTAL BALANCE : {balance || 0} WORDANA
          </p>
          <p className="text-xxs font-bold mt-1 text-gray-400">Transaction will fail if there is not enough Allowance or Balance</p>
        </div>


        <form className="py-5 width mt-4">
          <label className="block mb-2 text-sm text-gray-400">
            Enter Player Wallet Address
          </label>
          <input
            className="width border border-borderGrey rounded-lg bg-grey p-2 mb-8"
            placeholder="Player Wallet Address"
            name="address"
            value={invitePlayer}
            onChange={handleAddressChange}
          />
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
          <p className="text-xxs mt-1 text-gray-400">
            You will have <span className="text-primary mx-1">{balance - token || 0}</span> remaining
          </p>
        </form>
        <div onClick={parseInt(token) > displayValue ? increaseCap : stakeTokens}>
          <Button title={parseInt(token) > displayValue ? "Increase Allowance" : "Stake WRD"} />
        </div>
      </div>
      </div>
    )
}

export default GameInvites;