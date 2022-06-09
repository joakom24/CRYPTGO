import Image from "next/image";
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
import Winner from "../../../assets/winner.png";
import Table from "./Table";
import Pot from "./Pot";
const Poker = () => {
  return (
    //PokerInterface
    <main className="bg-[url('../assets/backgroundPoker.jpg')] bg-no-repeat bg-cover left-0 top-0 h-screen w-screen overflow-hidden flex justify-center items-center">
      <div className="w-1024 relative h-1024" id="gameview">
        <ButtonsTop />
        {/*ImagePokerTable*/}
        <Table />
        {/*POT*/}
        <Pot />
        {/*MoneyImg*/}
        <Money />
        {/*Cards*/}
        <Cards />
        {/*Users*/}
        <User />
        {/*Buttons play*/}
        <div className="absolute bottom-0 left-0 m-4">
          <ButtonsLeft />
        </div>
        {/*Buttons right*/}
        <div className=" bottom-6 text-white right-4 flex relative justify-end items-end w-1025 h-1025">
          {/*Buttom number*/}
          <ButtonNumber />
          <div className="bg-gradient-to-r from-whiteCustom via-white to-whiteCustom   flex justify-center py-0.2 rounded-large">
            <div className="bg-primary flex justify-between items-center w-96 rounded-large max-h-12 ">
              {/*Button less*/}
              <ButtonLess />
              {/*Button move*/}
              <ButtonMove />
              {/*Buttons add*/}
              <ButtonAdd />
            </div>
          </div>
        </div>
        <div className="absolute left-[78%] bottom-[40%]">
          <Image src={Winner} alt="img" />
        </div>
      </div>
    </main>
  );
};

export default Poker;
