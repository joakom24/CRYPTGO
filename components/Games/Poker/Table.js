import React from "react";
import table from "../../../assets/tablePoker.png";
import Image from "next/image";
const Table = () => {
  return (
    <div className="absolute top-[18%] left-[25%] ">
      <Image src={table} alt="tablePoker" />
    </div>
  );
};

export default Table;
