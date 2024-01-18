import Image from "next/image";
import LetterBox from "./LetterBox";
import Button from "../Button";
import Link from "next/link";

const GameInstruction = ({}) => {
  return (
    <div className=" space-y-[16px] mt-[87px]">
      <div className="w-[370px] border border-[#fff] items-center justify-center h-[149px] rounded-[20px] mx-auto p-4">
        <span className="font-small_pixel-7 text-[16px] text-[#3ACF88]">
          Game Rules:
        </span>
        <p className="font-small_pixel-7 font-[16px]">
          {" "}
          Try guessing the correct word in six (6) tries. After each try, the
          tile changes color to show you how close you were to the correct word
          You get 20 points for each correct word and spot
        </p>
      </div>
      <div className="mt-9">
        <div className="mt-3 flex w-[40%] items-center justify-center gap-3 mx-auto">
          <LetterBox letter={"w"} />
          <LetterBox letter={"o"} />
          <LetterBox letter={"r"} status={"right"} />
          <LetterBox letter={"d"} />
          <LetterBox letter={"s"} />
        </div>
        <p className="mt-2 text-[16px] text-center font-small_pixel-7 text-white">
          Letter R is correct and in the correct spot
        </p>
        <div className="mt-3 flex w-[40%] items-center justify-center gap-3 mx-auto">
          <LetterBox letter={"r"} />
          <LetterBox letter={"a"} />
          <LetterBox letter={"i"} />
          <LetterBox letter={"n"} />
          <LetterBox letter={"r"} status={"wrong"} />
        </div>
        <p className="mt-2 text-[16px] text-center font-small_pixel-7 text-white">
          Letter Y is correct and in the wrong spot
        </p>
        <div className="mt-3 flex w-[40%] items-center justify-center gap-3 mx-auto">
          <LetterBox letter={"s"} />
          <LetterBox letter={"k"} />
          <LetterBox letter={"i"} />
          <LetterBox letter={"p"} />
          <LetterBox letter={"s"} />
        </div>
        <p className="mt-2 text-[16px] text-center font-small_pixel-7 text-white">
          No letter is in correct or in the right spot
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/gamePlay">
          <Button title="Start Game" />
        </Link>
      </div>
    </div>
  );
};

export default GameInstruction;
