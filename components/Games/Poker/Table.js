import React from "react";
import table from "../../../assets/tablePoker.png";
import Image from "next/image";
const Table = () => {
  return (
    <div className="absolute flex justify-center items-center w-full h-full">
      <Image src={table} alt="tablePoker" />
    </div>
  );
};

export default Table;
