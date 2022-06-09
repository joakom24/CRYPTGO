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
import Table from "./Table";
import Pot from "./Pot";
const Poker = () => {
  return (
    //PokerInterface
    <main
      className=" bg-[url('../assets/backgroundPoker.jpg')] bg-no-repeat bg-cover left-0 top-0 h-screen w-screen overflow-hidden flex justify-center items-center"
      id="gameview"
    >
      <div className=" relative w-1024 h-1024  ">
        <ButtonsTop />
        {/*ImagePokerTable*/}
        <div className="h-1024">
          <Table />
          {/*POT*/}
          <Pot />
          {/*MoneyImg*/}
          <Money />
          {/*Cards*/}
          <Cards />
          {/*Users*/}
          <User />
        </div>
        <div className="flex absolute justify-between items-end w-full">
          {/*Buttons play*/}
          <ButtonsLeft />
          {/*Buttons right*/}
          <div className=" text-white  flex absolute justify-end w-full">
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
        </div>
      </div>
    </main>
  );
};

export default Poker;
