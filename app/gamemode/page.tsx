"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const route = [
  {
    image: "/images/singlePlayer.svg",
    route: "/",
    title: "Single Player",
  },
  {
    image: "/images/invite.svg",
    route: "/invitePlayer",
    title: "Invite Player",
  },
  {
    image: "/images/puzzle.svg",
    route: "/",
    title: "Join Game",
  },
];

const GameMode = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <div className="flex items-center justify-center gap-5 w-full mb-9">
          {route.map((item, index) => (
            <div
              onClick={() => setSelectedRoute(item.route)}
              key={index}
              className="w-56 h-48 bg-gamemode gamemode shadow-gameshadow flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md"
            >
              <Image src={item.image} alt={item.title} width={72} height={72} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <Link href={selectedRoute}>
          <Button title="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
