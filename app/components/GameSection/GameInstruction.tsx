import Image from "next/image";
import LetterBox from "./LetterBox";

const GameInstruction = ({}) => {
  return (
    <div className=" space-y-[16px] mt-[87px]">
      <div className="w-[370px] border border-[#fff] items-center justify-center h-[170px] mx-auto p-4">
        <span>Game Rules:</span>
        <p>
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
        <p className="mt-2 text-[16px] text-center text-white">
          Letter R is correct and in the correct spot
        </p>
        <div className="mt-3 flex w-[40%] items-center justify-center gap-3 mx-auto">
          <LetterBox letter={"r"} />
          <LetterBox letter={"a"} />
          <LetterBox letter={"i"} />
          <LetterBox letter={"n"} />
          <LetterBox letter={"r"} status={"wrong"} />
        </div>
        <p className="mt-2 text-[16px] text-center text-white">
          Letter Y is correct and in the wrong spot
        </p>
        <div className="mt-3 flex w-[40%] items-center justify-center gap-3 mx-auto">
          <LetterBox letter={"s"} />
          <LetterBox letter={"k"} />
          <LetterBox letter={"i"} />
          <LetterBox letter={"p"} />
          <LetterBox letter={"s"} />
        </div>
        <p className="mt-2 text-[16px] text-center text-white">
          No letter is in correct or in the right spot
        </p>
      </div>
    </div>
  );
};

export default GameInstruction;
