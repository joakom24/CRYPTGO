import bars from "../../../assets/barsIcon.png";
import Image from "next/image";
const ButtonMove = () => {
  return (
    <div className=" flex justify-left w-64 border-1 rounded-full items-center h-3   bg-primary">
      <button className="bg-pinkPoker w-6 h-5 rounded-full flex items-center justify-center">
        <Image src={bars} alt="barsIcon" />
      </button>
    </div>
  );
};

export default ButtonMove;
