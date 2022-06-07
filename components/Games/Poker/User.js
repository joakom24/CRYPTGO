import Image from "next/image";
import memoji from "../../../assets/memoji.png";
import memoji2 from "../../../assets/2memoji.png";
import memoji3 from "../../../assets/memoji3.png";
import memoji4 from "../../../assets/1memoji.png";
const User = () => {
  return (
    <div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 bottom-[80px] z-10 left-[40%] flex justify-center">
          <Image src={memoji4} alt="icon" width={150} height={150} />
        </div>
        <div className="absolute rounded-sm w-48 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-20 flex justify-center items-center flex-col bottom-[80px] left-[47%]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[650px] z-10 left-[329.51px] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[659.45px] left-[395.54px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[465px] z-10 left-[94px] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[469.45px] left-[150px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[315px] z-10 left-[145px] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[320px] left-[200.54px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[175px] z-10 left-[400px] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[180px] left-[455px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[170px] z-10 left-[850px] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[180px] left-[915px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser3 shadow-4xl  h-18 w-18 top-[305px] z-10 left-[1160px] flex justify-center">
          <Image src={memoji3} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-14 flex justify-center items-center flex-col top-[310px] left-[1215px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser2 shadow-4xl  h-18 w-18 top-[455px] z-10 left-[1205px] flex justify-center">
          <Image src={memoji2} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-14 flex justify-center items-center flex-col top-[460px] left-[1265px]">
          <h1 className="font-medium text-white text-xl drop-shadow-6xl leading-6">
            Juan Carlos
          </h1>
          <h3 className="font-medium text-white text-sm">10.000,00</h3>
        </div>
      </div>
      <div>
        <div className="rounded-full absolute bg-borderUser shadow-4xl  h-18 w-18 top-[650px] z-10 left-[1000.51px] flex justify-center">
          <Image src={memoji} alt="icon" />
        </div>
        <div className="absolute rounded-sm w-40 bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-14 flex justify-center items-center flex-col top-[659.45px] left-[1070.54px]">
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
