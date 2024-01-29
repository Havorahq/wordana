"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const GameMode = () => {
  const [href, setHref] = useState("");

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center h-screen gap-3 m-32">
        <div className="flex items-center justify-center gap-6 w-full mb-9">
          <div
            className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 ${
              href === "/singleplayer" ? "activeMode" : ""
            }`}
            onClick={() => setHref("/singleplayer")}
          >
            <Image
              src="/images/singlePlayer.svg"
              alt="Single player"
              width={72}
              height={72}
            />
            <p className="font-bold gametext text-xl">Single Player</p>
          </div>
          <div
            className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 ${
              href === "/stake" ? "activeMode" : ""
            }`}
            onClick={() => setHref("/stake")}
          >
            <Image
              src="/images/invite.svg"
              alt="Single player"
              width={72}
              height={72}
              className="mb-1 mt-3"
            />
            <p className="mt-3 font-bold gametext text-xl">Invite Player</p>
          </div>
          <div
            className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 ${
              href === "/gameinvites" ? "activeMode" : ""
            }`}
            onClick={() => setHref("/gameinvites")}
          >
            <Image
              src="/images/puzzle.svg"
              alt="Single player"
              width={72}
              height={72}
            />
            <p className="font-bold gametext text-xl">Join Game</p>
          </div>
        </div>
        <Link href={href}>
          <Button title="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
