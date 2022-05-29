import cardOne from "../../../assets/cardDefault.png";
import cardTwo from "../../../assets/cardJSpades.png";
import cardThree from "../../../assets/cardAHeart.png";
import Image from "next/image";
const Cards = () => {
  return (
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
  );
};

export default Cards;
