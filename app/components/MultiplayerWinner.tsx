"use client";

import Image from "next/image";
import React from "react";
import { useContractWrite, useAccount } from "wagmi";
import { CONTRACT_ADDRESS } from "../smart-contract/constants";
import CONTRACT_ABI2 from "../smart-contract/wordanamain-abi.json";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Header from "./Header";

const MultiplayerWinner = (props: {
  message: string;
  isDraw: boolean;
  id: string;
  winner: string;
  refund: any;
}) => {
  const router = useRouter();
  const { write: winnerClaimReward } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI2,
    functionName: "winnerClaimReward",
  });

  const { address } = useAccount();

  const isWinner = props.winner === address;

  const claimReward = async () => {
    winnerClaimReward({
      args: [props.id],
    });
    router.push("/reward");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-3 m-28 mb-16">
        <Image src="/images/flag.gif" alt="vector" width={154} height={154} />
        <div className="flex items-center gap-2 mt-8">
          <Image
            src="/images/user-avatar.svg"
            alt="Avatar"
            height={30}
            width={30}
          />
          <p className="retro text-xs">{props.message}</p>
        </div>
        <div>
          {isWinner && (
            <div onClick={claimReward}>
              <Button title="Claim Your Reward" />
            </div>
          )}
          {props.isDraw && (
            <div className="flex justify-center">
              <div onClick={props.refund}>
                <Button title="Request refund" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiplayerWinner;
