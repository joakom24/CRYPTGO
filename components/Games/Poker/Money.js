import Image from "next/image";
import money from "../../../assets/money.png";
const Money = () => {
  return (
    <div>
      <div className="absolute left-[30%] top-[59%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[25%] top-[51%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[27%] top-[39%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[48%] top-[58%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[63%] top-[59%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[69%] top-[52%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[69%] top-[39%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[37%] top-[33%]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[58%] top-[33%]">
        <Image src={money} alt="money" />
      </div>
    </div>
  );
};

export default Money;
