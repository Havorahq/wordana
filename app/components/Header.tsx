"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
} from "../smart-contract/constants";
import CONTRACT_ABI from "../smart-contract/wordanamain-abi.json";
import TOKEN_ABI from "../smart-contract/token-abi.json";
import Web3 from "web3";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { BigNumber } from "bignumber.js";

const Header = () => {
  const { address } = useAccount();
  const { data: allowanceData }: { data: any } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [address, CONTRACT_ADDRESS],
  });

  const { data: userXp, error } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "XP", // Replace with the actual public variable name
  });

  const bigintValue = new BigNumber(allowanceData);
  const realTokenValue = bigintValue.div(BigNumber(10).exponentiatedBy(18));
  const displayValue = realTokenValue.toNumber();
  const [showReloadButton, setShowReloadButton] = useState(false)

  const { data: approveData, write: allowanceWrite } = useContractWrite({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "approve",
    args: [CONTRACT_ADDRESS, new BigNumber(100).integerValue().toString()],
  });

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="cursor-pointer">
        <Image src="/icons/brandLogo.svg" alt="logo" height={64} width={192} />
      </Link>
      {/* Sign in player */}
      <div
        className="flex gap-2 items-center  text-green-500 cursor-pointer border-solid border-2 border-sky-500 rounded-xl font-mono p-2 hover:bg-green-600 hover:text-black focus:outline-none focus:ring focus:ring-violet-300"
        onClick={allowanceWrite as any}
      >
        <div className="flex gap-2 items-center" onClick={()=>{
          setTimeout(()=>setShowReloadButton(true), 5000)
        }}>
          <h3>Add Staking Balance: </h3>

          <div className="flex gap-2 retro text-xs">{isNaN(displayValue)? '' : displayValue}</div>
        </div>
        
      </div>

      {showReloadButton && <p className="text-sm text-green-500 hover:text-white cursor-pointer" onClick={()=>location.reload()}>reload</p>}
      <ConnectButton />
    </div>
  );
};

export default Header;
