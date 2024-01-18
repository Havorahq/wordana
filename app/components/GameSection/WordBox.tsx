import { LetterStatus } from "./GameBoard";
import LetterBox from "./LetterBox";

interface WordBoxProps {
  wordArray: LetterStatus[];
}

const WordBox: React.FC<WordBoxProps> = ({ wordArray = [] }) => {
  return (
    <div className="grid grid-cols-5 items-center justify-center mx-auto gap-4 w-[40%]">
      <LetterBox letter={wordArray[0]?.letter} status={wordArray[0]?.status} />
      <LetterBox letter={wordArray[1]?.letter} status={wordArray[1]?.status} />
      <LetterBox letter={wordArray[2]?.letter} status={wordArray[2]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
      <LetterBox letter={wordArray[0]?.letter} status={wordArray[0]?.status} />
      <LetterBox letter={wordArray[1]?.letter} status={wordArray[1]?.status} />
      <LetterBox letter={wordArray[2]?.letter} status={wordArray[2]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
      <LetterBox letter={wordArray[0]?.letter} status={wordArray[0]?.status} />
      <LetterBox letter={wordArray[1]?.letter} status={wordArray[1]?.status} />
      <LetterBox letter={wordArray[2]?.letter} status={wordArray[2]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
      <LetterBox letter={wordArray[2]?.letter} status={wordArray[2]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
      <LetterBox letter={wordArray[0]?.letter} status={wordArray[0]?.status} />
      <LetterBox letter={wordArray[1]?.letter} status={wordArray[1]?.status} />
      <LetterBox letter={wordArray[2]?.letter} status={wordArray[2]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
      <LetterBox letter={wordArray[3]?.letter} status={wordArray[3]?.status} />
      <LetterBox letter={wordArray[4]?.letter} status={wordArray[4]?.status} />
    </div>
  );
};

export default WordBox;
