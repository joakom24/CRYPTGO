import Image from "next/image";
import memoji from "../../../assets/memoji.png";
import memoji2 from "../../../assets/2memoji.png";
import memoji3 from "../../../assets/memoji3.png";
import memoji4 from "../../../assets/1memoji.png";
const User = () => {
  return (
    <div>
      <div className="rounded-full absolute bg-userPoker shadow-7xl  h-28 w-28 top-[90%] z-10 left-[39.5%] flex justify-center">
        <div className="bg-userPoker2 h-24 w-24 rounded-full   m-auto shadow-4xl">
          <div className="absolute h-[110px] w-[110px]  mt-1 ml-1 rounded-full shadow-8xl">
            <Image src={memoji4} alt="icon" className=" rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute rounded-sm w-48 bg-gradient-to-l from-userSeven to-userEight border-2 border-borderUser2 h-16 flex justify-center items-center flex-col top-[98%] left-[46%]">
        <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
          Juan Carlos
        </h1>
        <h3 className="font-medium text-white text-sm">10.000,00</h3>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[73%] z-10 left-[21%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[74.6%] left-[25.5%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[49%] z-10 left-[12%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[49.5%] left-[15.5%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">20.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[25%] z-10 left-[12.5%] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[25.5%] left-[16%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[0%] z-10 left-[30%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[1%] left-[34%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">50.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[0%] z-10 left-[54%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[1%] left-[58.5%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">120.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[20%] z-10 left-[69.5%] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[20.5%] left-[72.5%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">5.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[49%] z-10 left-[71%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[49.5%] left-[74.5%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">220.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[73%] z-10 left-[60%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[74.6%] left-[64.3%]">
          <h1 className="font-medium text-white text-l drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
