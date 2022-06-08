import cardOne from "../../../assets/cardDefault.png";
import cardTwo from "../../../assets/cardJSpades.png";
import cardThree from "../../../assets/cardAHeart.png";
import Image from "next/image";
const Cards = () => {
  return (
    <div className="w-full h-full flex justify-center absolute">
      <Image src={cardThree} alt="cardThree" />

      <Image src={cardThree} alt="cardThree" />

      <Image src={cardTwo} alt="cardTwo" />

      <Image src={cardOne} alt="cardOne" />

      <Image src={cardOne} alt="cardOne" />

      <Image src={cardOne} alt="cardOne" />
    </div>
  );
};

export default Cards;
