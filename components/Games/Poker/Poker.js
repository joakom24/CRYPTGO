import Image from "next/image";
//Image
import table from "../../../assets/tablePoker.png";
import pot from "../../../assets/pot.png";
//Components
import ButtonMove from "./Buttons/ButtonMove";
import ButtonNumber from "./Buttons/ButtonNumber";
import ButtonAdd from "./Buttons/ButtonAdd";
import ButtonLess from "./Buttons/ButtonLess";
import ButtonsLeft from "./Buttons/ButtonsLeft";
import ButtonsTop from "./Buttons/ButtonsTop";
import Money from "./Money";
import Cards from "./Cards";
import User from "./User";
const Poker = () => {
  return (
    //PokerInterface
    <div
      id="gameview"
      className="bg-[url('../assets/backgroundPoker.png')] bg-no-repeat bg-cover left-0 top-0 h-screen flex justify-center items-center"
    >
      <ButtonsTop />
      {/*ImagePokerTable*/}
      <div>
        <Image src={table} alt="tablePoker" />
        <div className="absolute left-[45%]  top-[40%]">
          <Image src={pot} alt="pot" />
        </div>
        <div>
          {/*MoneyImg*/}
          <Money />
          <Cards />
        </div>
        <User />
      </div>
      {/*Buttons play*/}
      <div className="absolute bottom-0 left-0 m-4">
        <ButtonsLeft />
      </div>
      {/*Buttons right*/}
      <div className="absolute bottom-6 text-white right-4 flex ">
        {/*Buttom number*/}
        <ButtonNumber />
        <div className="bg-primary flex justify-between items-center w-96 rounded-large max-h-12 border-buttom border-t-1 border-b-1">
          {/*Button less*/}
          <ButtonLess />
          {/*Button move*/}
          <ButtonMove />
          {/*Buttons add*/}
          <ButtonAdd />
        </div>
      </div>
    </div>
  );
};

export default Poker;
