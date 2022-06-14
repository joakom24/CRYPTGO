import React from "react";
import table from "../../../assets/tablePoker.png";
import Image from "next/image";
const Table = () => {
  return (
    <div className="flex justify-center items-center h-full absolute w-full ">
      <Image src={table} alt="tablePoker" />
    </div>
  );
};

export default Table;
