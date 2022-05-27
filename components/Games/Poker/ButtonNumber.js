import React, { useState } from "react";

const ButtonNumber = (props) => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="mr-2  bg-primary px-4 py-4 rounded-sm  border-t-1 border-buttom border-b-1 drop-shadow-5xl"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
};

export default ButtonNumber;
