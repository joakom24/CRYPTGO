import React from "react";
import table from "../../../assets/tablePoker.png";
import Image from "next/image";
const Table = () => {
  return (
    <div className="absolute w-full h-5/6 flex justify-center items-center">
      <Image src={table} alt="tablePoker" />
    </div>
  );
};

export default Table;
