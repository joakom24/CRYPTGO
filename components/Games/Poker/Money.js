import Image from "next/image";
import money from "../../../assets/money.png";
const Money = () => {
  return (
    <div>
      <div className="absolute left-[450px] top-[564px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[380px] top-[490px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[420px] top-[384px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[750px] top-[554px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[1000px] top-[564px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[1100px] top-[490px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[1050px] top-[384px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[600px] top-[334px]">
        <Image src={money} alt="money" />
      </div>
      <div className="absolute left-[900px] top-[334px]">
        <Image src={money} alt="money" />
      </div>
    </div>
  );
};

export default Money;
