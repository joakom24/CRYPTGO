import Image from "next/image";
import table from "../../../assets/tablePoker.png";
import less from "../../../assets/lessIcon.png";
import money from "../../../assets/money.png";
import memoji from "../../../assets/memoji.png";
import pot from "../../../assets/pot.png";
import more from "../../../assets/moreIcon.png";

import back from "../../../assets/backArrow.png";
import expand from "../../../assets/expandIcon.png";
import audio from "../../../assets/audioIcon.png";
import cardOne from "../../../assets/cardDefault.png";
import cardTwo from "../../../assets/cardJSpades.png";
import cardThree from "../../../assets/cardAHeart.png";
import ButtonMove from "./ButtonMove";
import ButtonNumber from "./ButtonNumber";
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
        <div className="absolute left-[45%]  top-[40%]">
          <Image src={pot} alt="pot" />
        </div>
        <div>
          <div className="absolute left-[650px] top-[544px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[580px] top-[470px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[620px] top-[364px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[920px] top-[554px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[1200px] top-[544px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[1300px] top-[470px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[1250px] top-[364px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[800px] top-[334px]">
            <Image src={money} alt="money" />
          </div>
          <div className="absolute left-[1100px] top-[334px]">
            <Image src={money} alt="money" />
          </div>
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
        <div>
          <div className="rounded-full absolute bg-borderUser shadow-4xl  h-20 w-20 top-[630px] z-10 left-[419.51px] flex justify-center">
            <Image src={memoji} alt="icon" width={100} />
          </div>
          <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-16 flex justify-center items-center flex-col top-[639.45px] left-[495.54px]">
            <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
              Juan Carlos
            </h1>
            <h3 className="font-medium text-white text-sm">10.000,00</h3>
          </div>
        </div>
      </div>
      {/*Buttons play*/}
      <div className="absolute bottom-0 left-0 m-4">
        {/*Button Fold*/}
        <button className="mr-4   shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white hover:bg-secondary hover:border-2 hover:border-borders ">
          FOLD
        </button>
        {/*Button Check*/}
        <button className="mr-4 hover:bg-secondary hover:border-2 hover:border-borders  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
          CHECK
        </button>
        {/*Button Raise to*/}
        <button className="hover:bg-secondary hover:border-2 hover:border-borders  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
          RAISE TO
        </button>
      </div>
      {/*Buttons right*/}
      <div className="absolute bottom-6 text-white right-4 flex ">
        {/*Buttom number*/}
        <ButtonNumber />

        <div className="bg-primary flex justify-between items-center w-96 rounded-large max-h-12 border-buttom border-t-1 border-b-1">
          {/*Button less*/}
          <button className="ml-4 mt-2 mb-2  flex  items-center justify-center bg-pinkPoker rounded-full w-6 h-6 border-2 border-pinkPokerBorder shadow-4xl">
            <Image src={less} alt="lessIcon" />
          </button>
          {/*Button move*/}
          <ButtonMove />
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
