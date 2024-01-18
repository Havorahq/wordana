import React from "react";
import Header from "../components/Header";
import GameInstruction from "../components/GameSection/GameInstruction";
import GameBoard from "../components/GameSection/GameBoard";

const page = () => {
  return (
    <section>
      <Header />
      <GameBoard />
    </section>
  );
};

export default page;
