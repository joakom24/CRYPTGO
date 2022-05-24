import Image from "next/image";
import table from "../assets/tablePoker.png";
import less from "../assets/less.png";
import more from "../assets/more.png";
import bars from "../assets/bars.png";
const Poker = () => {
  return (
    //PokerInterface
    <div className="bg-black h-screen flex justify-center items-center">
      {/*ImagePokerTable*/}
      <div>
        <Image src={table} alt="tablePoker" />
      </div>
      {/*Buttons play*/}
      <div className="absolute bottom-0 left-0 m-4">
        {/*Button Fold*/}
        <button className="mr-4 bg-secondary  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
          FOLD
        </button>
        {/*Button Check*/}
        <button className="mr-4 bg-secondary  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
          CHECK
        </button>
        {/*Button Raise to*/}
        <button className="bg-secondary  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
          RAISE TO
        </button>
      </div>
      {/*Buttons right*/}
      <div className="absolute bottom-6 text-white right-4 flex ">
        {/*Buttom number*/}
        <button className="mr-2  bg-primary px-4 py-4 rounded-sm  border-t-1 border-buttom border-b-1 drop-shadow-5xl">
          20
        </button>

        <div className="bg-primary flex justify-between w-96 rounded-large max-h-12 border-buttom border-t-1 border-b-1">
          {/*Button less*/}
          <button className="m-3  flex items-center  bg-pinkPoker rounded-full px-2 py-1 border-2 border-pinkPokerBorder shadow-4xl">
            <Image src={less} alt="lessIcon" />
          </button>
          {/*Button move*/}
          <div className=" flex justify-center w-64 border-1 rounded-full m-auto h-3   bg-pinkPoker">
            <Image src={bars} alt="barsIcon" />
          </div>
          {/*Buttons add*/}
          <button className="m-3 flex items-center  bg-pinkPoker rounded-full px-2 py-1 border-2 border-pinkPokerBorder shadow-4xl">
            <Image src={more} alt="moreIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poker;
