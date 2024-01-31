"use client";

import React, { useState, useEffect } from "react";

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
  useContractEvent,
} from "wagmi";
import { useMyContext } from "../context/Context";
import { BigNumber } from "bignumber.js";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

const GameInvites = () => {
  const { data, setData } = useMyContext();
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [invitePlayer, setInvitePlayer] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(false)
  //Stake Function
  const {
    data: enterGameData,
    write: enterGame,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "enterGame",
  });

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: "playerTwoHasEntered",
    listener: (event_Emitted) => {
      const emittedEvent = event_Emitted[0] as any
      setData(emittedEvent.args);
      router.push("/startmultiplayergame");
    },
  });

  const router = useRouter();

  useEffect(() => {
    // if (data) {
    //   router.push("/startgame");
    // }
  }, [data, router]);

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
    if (value === address) {
      setError(true);
    } else {
      setError(false);
    }
    setInvitePlayer(value);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setToken(value);
  // };

  const joinGame = async () => {
    setLoading(true)
    //extra check
    if (address === invitePlayer) {
      setError(true);
    } else {
      setError(false);
      enterGame({
        args: [invitePlayer],
      });
    }
  };

  // const increaseCap = async () => {
  //   console.log("Cap increased");
  // };
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center gap-3 m-32">
        <div>
          {/* <p className="uppercase retro text-sm text-primary">
            Allowance = {displayValue || 0}
          </p> */}
          <p className="uppercase retro text-sm text-primary">
            TOTAL BALANCE:{balance || 0} WORDANA
          </p>
          <p className="text-xxs font-bold mt-1 text-gray-400">
            Transaction will fail if there is not enough Allowance or Balance
          </p>
        </div>

        <form className="py-5 width mt-4">
          <div className="mb-8">
            <label className="block mb-2 text-sm text-gray-400">
              Enter Player Wallet Address
            </label>
            <input
              className="width border border-borderGrey rounded-lg bg-grey p-2"
              placeholder="Player Wallet Address"
              name="address"
              value={invitePlayer}
              onChange={handleAddressChange}
            />
            {error && (
              <p className="text-xs mt-1 font-bold tracking-widest text-red-400">
                You can&apos;t play yourself!
              </p>
            )}
          </div>
          {/* <div>
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
          </div> */}
        </form>
        {
          loading? (
            <div className="mt-8 flex flex-col items-center space-y-4">
              <Oval
                height="50"
                width="50"
                // radius="9"
                color="#45F5A1"
                ariaLabel="loading"
              />
              <p>Joining game...</p>
            </div>
          ):(
            <div onClick={joinGame}>
              <Button title="Join Game"  />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GameInvites;
