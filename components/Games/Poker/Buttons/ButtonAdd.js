import Image from "next/image";
import more from "../../../../assets/moreIcon.png";
const ButtonAdd = () => {
  return (
    <button className="mr-4 mt-2 mb-2  flex items-center justify-center w-6 h-6   shadow-4xl bg-pinkPoker rounded-full  border-2 border-pinkPokerBorder ">
      <Image src={more} alt="moreIcon" width={20} height={20} />
    </button>
  );
};

export default ButtonAdd;
