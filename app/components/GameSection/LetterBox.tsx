type Props = {
  letter: string;
  status?: string;
};

export default function LetterBox({ letter, status }: Props) {
  if (status === "right") {
    return (
      <div className="w-[70px] h-[70px] flex justify-center items-center bg-green-400 text-4xl p-5 rounded-xl uppercase font-bold text-[#000000]">
        {letter}
      </div>
    );
  } else if (status === "wrong") {
    return (
      <div className="w-[70px] h-[70px] flex justify-center items-center bg-yellow-600 text-4xl p-5 rounded-xl uppercase font-bold text-[#000000]">
        {letter}
      </div>
    );
  } else {
    return (
      <div className="w-[70px] h-[70px] flex justify-center items-center bg-slate-100 text-4xl p-5 rounded-xl uppercase font-bold text-[#000000]">
        {letter}
      </div>
    );
  }
}
