//Components
import ButtonMove from "./Buttons/ButtonMove";
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
    <main className=" bg-[url('../assets/backgroundPoker.jpg')] bg-no-repeat bg-cover left-0 top-0 h-screen w-screen overflow-hidden flex justify-center items-center">
      <div className=" absolute w-1024 h-1024 top-[10%]">
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
        <div className="flex absolute justify-between top-[115%] w-full">
          {/*Buttons play*/}
          <ButtonsLeft />
          {/*Buttons right*/}
          <ButtonMove />
        </div>
      </div>
    </main>
  );
};

export default Poker;
