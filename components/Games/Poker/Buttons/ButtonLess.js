import Image from "next/image";
import less from "../../../../assets/lessIcon.png";
const ButtonLess = () => {
  return (
    <button className="ml-4 mt-2 mb-2  flex  items-center justify-center bg-pinkPoker rounded-full w-6 h-6 border-2 border-pinkPokerBorder shadow-4xl">
      <Image src={less} alt="lessIcon" />
    </button>
  );
};
export default ButtonLess;
