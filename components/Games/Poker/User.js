import Image from "next/image";
import memoji from "../../../assets/memoji.png";
import memoji2 from "../../../assets/2memoji.png";
import memoji3 from "../../../assets/memoji3.png";
import memoji4 from "../../../assets/1memoji.png";
import letter from "../../../assets/letter.png";
import battery from "../../../assets/battery.png";
const User = () => {
  return (
    <div>
      <div>
        <div className="rounded-full absolute bg-userPoker shadow-7xl  h-28 w-28 bottom-[8%] z-10 left-[40%] flex justify-center">
          <div className="bg-userPoker2 h-24 w-24 rounded-full   m-auto shadow-4xl">
            <div className="absolute h-[110px] w-[110px]  mt-1 ml-1 rounded-full shadow-8xl">
              <Image src={memoji4} alt="icon" className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute ml-[39%] mt-[7.5%] z-10">
          <Image src={letter} alt="icon" width={80} height={80} />
        </div>
        <div className="absolute rounded-sm w-48 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-20 flex justify-center items-center flex-col bottom-[9%] left-[46%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>

      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[68%] z-10 left-[21%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[69.5%] left-[25.5%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[49%] z-10 left-[6%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[49.5%] left-[9.5%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[33%] z-10 left-[9.2%] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[33.5%] left-[12.7%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[18.5%] z-10 left-[25.5%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[19%] left-[29%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[18%] z-10 left-[54%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[19%] left-[58.5%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[33%] z-10 left-[74%] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[33.5%] left-[77.5%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[49%] z-10 left-[77%] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[49.5%] left-[80.5%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[68%] z-10 left-[64%] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[69.5%] left-[68.3%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
