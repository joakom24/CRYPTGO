import React from "react";

const Pot = () => {
  return (
    <section className=" w-full h-full flex justify-center absolute top-[40%]">
      <div className="flex gap-1 w-full justify-center mix-blend-hard-light ">
        <div className="rounded-pot2 border-2 border-pot drop-shadow-1xl h-[3.9%] w-[4.5%] bg-[rgba(255, 146, 45, 0.2)] mix-blend-hard-light ">
          <h3 className="font-bold  flex justify-center items-center  bg-gradient-to-r from-[#EDD582] to-[#B99208] drop-shadow-1xl fill-transparent bg-clip-text text-pot4">
            POT
          </h3>
        </div>
        <h1 className=" font-medium text-white border-1 border-white w-[10%] h-[3.9%] rounded-pot text-sm flex justify-center items-center">
          100.000,00
        </h1>
      </div>
    </section>
  );
};

export default Pot;
