import bars from "../../../../assets/barsIcon.png";
import Image from "next/image";
import { useState } from "react";
import more from "../../../../assets/moreIcon.png";
import less from "../../../../assets/lessIcon.png";
const ButtonMove = () => {
  const [number, setNumber] = useState(0);
  const moreNumber = () => {
    setNumber(number + 1);
  };
  const lessNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div className=" text-white  flex absolute justify-end w-[100%] ml-[5%]">
      {/*Buttom number*/}
      <div className="bg-gradient-to-r from-whiteCustom via-white to-whiteCustom rounded-sm mr-2 py-0.2 ">
        <input
          className=" w-10  bg-primary px-1 py-1.5 rounded-sm drop-shadow-5xl font-medium text-xl text-center "
          name="number"
          defaultValue={number}
          type="text"
        />
      </div>
      <div className="bg-gradient-to-r from-whiteCustom via-white to-whiteCustom   flex justify-center py-0.2 rounded-large">
        <div className="bg-primary flex justify-between items-center w-96 rounded-large max-h-12 ">
          {/*Button less*/}
          <button
            onClick={lessNumber}
            className="ml-4 mt-2 mb-2  flex  items-center justify-center bg-pinkPoker rounded-full w-6 h-6 border-2 border-pinkPokerBorder shadow-4xl"
          >
            <Image src={less} alt="lessIcon" width={20} height={20} />
          </button>
          {/*Button move*/}
          <div className="bg-gradient-to-r from-whiteCustom to-white  rounded-sm py-0.2 ">
            <div className=" flex justify-left w-64 rounded-full items-center h-3   bg-primary">
              <button className="bg-pinkPoker w-6 h-5 rounded-full flex items-center justify-center ">
                <Image src={bars} alt="barsIcon" />
              </button>
            </div>
          </div>
          {/*Buttons add*/}
          <button
            onClick={moreNumber}
            className="mr-4 mt-2 mb-2  flex items-center justify-center w-6 h-6   shadow-4xl bg-pinkPoker rounded-full  border-2 border-pinkPokerBorder "
          >
            <Image src={more} alt="moreIcon" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonMove;
