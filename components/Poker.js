import Image from "next/image";
import table from "../assets/tablePoker.png";
import less from "../assets/lessIcon.png";
import more from "../assets/moreIcon.png";
import bars from "../assets/barsIcon.png";
import back from "../assets/backArrow.png";
const Poker = () => {
  return (
    //PokerInterface
    <div className="bg-[url('../assets/backgroundPoker.png')] bg-no-repeat bg-cover left-0 top-0 h-screen flex justify-center items-center">
      <div className="">
        <Image src={back} alt="backIcon" />
      </div>
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

        <div className="bg-primary flex justify-between items-center w-96 rounded-large max-h-12 border-buttom border-t-1 border-b-1">
          {/*Button less*/}
          <button className="ml-4 mt-2 mb-2  flex  items-center justify-center bg-pinkPoker rounded-full w-6 h-6 border-2 border-pinkPokerBorder shadow-4xl">
            <Image src={less} alt="lessIcon" className="" />
          </button>
          {/*Button move*/}
          <div className=" flex justify-center w-64 border-1 rounded-full items-center h-3   bg-primary">
            <Image src={bars} alt="barsIcon" className="bg-pinkPoker " />
          </div>
          {/*Buttons add*/}
          <button className="mr-4 mt-2 mb-2  flex items-center justify-center w-6 h-6  bg-pinkPoker rounded-full  border-2 border-pinkPokerBorder shadow-4xl">
            <Image src={more} alt="moreIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poker;
