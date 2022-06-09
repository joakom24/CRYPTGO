import bars from "../../../../assets/barsIcon.png";
import Image from "next/image";
const ButtonMove = () => {
  return (
    <div className="bg-gradient-to-r from-whiteCustom to-white  rounded-sm py-0.2 ">
      <div className=" flex justify-left w-64 rounded-full items-center h-3   bg-primary">
        <button className="bg-pinkPoker w-6 h-5 rounded-full flex items-center justify-center">
          <Image src={bars} alt="barsIcon" />
        </button>
      </div>
    </div>
  );
};

export default ButtonMove;
