import Image from "next/image";
import memoji from "../assets/memoji.png";
const UserLayout = () => {
  return (
    <div className="">
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
  );
};

export default UserLayout;
