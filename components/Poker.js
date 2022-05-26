import Image from "next/image";
import table from "../assets/tablePoker.png";
import less from "../assets/lessIcon.png";
import more from "../assets/moreIcon.png";
import bars from "../assets/barsIcon.png";
import back from "../assets/backArrow.png";
import expand from "../assets/expandIcon.png";
import audio from "../assets/audioIcon.png";
import cardOne from "../assets/cardDefault.png";
import cardTwo from "../assets/cardJSpades.png";
import cardThree from "../assets/cardAHeart.png";
const Poker = () => {
  return (
    //PokerInterface
    <div className="bg-[url('../assets/backgroundPoker.png')] bg-no-repeat bg-cover left-0 top-0 h-screen flex justify-center items-center">
      {/*BackArrowIcon*/}
      <button className=" absolute left-[11.17%] right-[88.29%] top-[7.42%] bottom-[90.92%] ">
        <Image src={back} alt="backIcon" />
      </button>
      <button className=" absolute left-[84.71%] right-[14.08%] top-[7.23%] bottom-[90.82%]">
        <Image src={expand} alt="expandIcon" />
      </button>
      <button className=" absolute left-[87.4%]  top-[7.42%]  ">
        <Image src={audio} alt="audioIcon" />
      </button>
      {/*ImagePokerTable*/}
      <div>
        <Image src={table} alt="tablePoker" />
        <div>
          <div className="absolute left-[37.76%] top-[45%]">
            <Image src={cardThree} alt="cardThree" />
          </div>
          <div className="absolute left-[42.91%]  top-[45%] ">
            <Image src={cardThree} alt="cardThree" />
          </div>
          <div className="absolute left-[48.06%]  top-[45%] ">
            <Image src={cardTwo} alt="cardTwo" />
          </div>
          <div className="absolute left-[53.15%]  top-[45%] ">
            <Image src={cardOne} alt="cardOne" />
          </div>
          <div className="absolute left-[53.15%]  top-[45%] ">
            <Image src={cardOne} alt="cardOne" />
          </div>
          <div className="absolute left-[58.3%]  top-[45%] ">
            <Image src={cardOne} alt="cardOne" />
          </div>
        </div>
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
            <Image src={less} alt="lessIcon" />
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
