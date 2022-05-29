import Image from "next/image";
import more from "../../../../assets/moreIcon.png";
const ButtonAdd = () => {
  return (
    <button className="mr-4 mt-2 mb-2  flex items-center justify-center w-6 h-6  bg-pinkPoker rounded-full  border-2 border-pinkPokerBorder shadow-4xl">
      <Image src={more} alt="moreIcon" />
    </button>
  );
};

export default ButtonAdd;
