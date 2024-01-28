"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Link from "next/link";
import { useMyContext } from "../context/Context";
import { BigNumber } from "bignumber.js";

import {
  useContractEvent,
  useAccount,
  useBalance,
  useContractRead,
} from "wagmi";

import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import { TOKEN_CONTRACT_ADDRESS } from "../smart-contract/constants";

import TOKEN_ABI from "../smart-contract/token-abi.json";

const InvitePlayer = () => {
  const [invitePlayer, setInvitePlayer] = useState<string>("");
  const { data, setData } = useMyContext();
  const { address } = useAccount();

  const { data: allowanceData }: { data: any } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [address, CONTRACT_ADDRESS],
  });

  const result = useBalance({
    address,
    token: TOKEN_CONTRACT_ADDRESS,
  });

  const balance = result.data?.formatted;

  const bigintValue = new BigNumber(allowanceData);
  const realTokenValue = bigintValue.div(BigNumber(10).exponentiatedBy(18));
  const displayValue = realTokenValue.toNumber();
  console.log(displayValue, "safeAllowanceData");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInvitePlayer(value);
  };

  const updateData = () => {
    setData(invitePlayer);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-32">
        <div className="border border-borderGrey p-5 rounded-lg text-sm width">
          <p>Total Balance</p>
          <p className="my-5"> {balance} WRD</p>
        </div>

        <form className="py-5 width" onSubmit={updateData}>
          <label className="block mb-2 text-sm text-gray-400">
            Enter Player Wallet Address
          </label>
          <input
            className="width border border-borderGrey rounded-lg bg-grey p-2"
            placeholder="Player Wallet Address"
            name="address"
            value={invitePlayer}
            onChange={handleChange}
          />
        </form>
        <Link href="/stake" onClick={updateData}>
          <Button title="Invite Player" />
        </Link>
      </div>
    </div>
  );
};

export default InvitePlayer;
