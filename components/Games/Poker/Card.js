import React from "react";
import ACora from "../../../assets/Corazones/ACora.png";
import JPica from "../../../assets/Pica/JPica.png";
import Back from "../../../assets/CartaBack.png";
import Image from "next/image";
const Card = () => {
  return (
    <div className="top-[35%] absolute flex gap-2">
      <div>
        <Image src={ACora} alt="cardhearth" width={53} height={78} />
      </div>
      <div>
        <Image src={ACora} alt="cardhearth" width={53} height={78} />
      </div>
      <div>
        <Image src={JPica} alt="cardhearth" width={53} height={78} />
      </div>
      <div>
        <Image src={Back} alt="cardBack" width={53} height={78} />
      </div>
      <div>
        <Image src={Back} alt="cardBack" width={53} height={78} />
      </div>
    </div>
  );
};

export default Card;
