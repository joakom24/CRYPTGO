import Image from "next/image";
import money from "../../../assets/money.png";
const Money = () => {
  return (
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
    </div>
  );
};

export default Money;
