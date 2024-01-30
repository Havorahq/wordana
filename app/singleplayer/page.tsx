"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const SinglePlayer = () => {
  const [href, setHref] = useState("");
  const [mode, setMode] = useState("");

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center h-screen gap-3 m-32">
        <div className="flex items-center justify-center gap-6 w-full mb-9">
          <div
            className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 ${
              mode === "newgame" ? "activeMode" : ""
            }`}
            onClick={() => setMode("newgame")}
          >
            <Image
              src="/images/singlePlayer.svg"
              alt="Single player"
              width={72}
              height={72}
            />
            <p className="font-bold gametext text-xl">New Game</p>
          </div>
          <div
            className={`w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 ${
              mode === "dailyword" ? "activeMode" : ""
            }`}
            onClick={() => setMode("dailyword")}
          >
            <Image
              src="/images/puzzle.svg"
              alt="Single player"
              width={72}
              height={72}
              className="mt-4"
            />
            <p className="font-bold gametext text-xl">Daily Word</p>
          </div>
        </div>
        <Link
          href={mode === "newgame" ? "/instruction" : "/dailyword-instruction"}
        >
          <Button title="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default SinglePlayer;
