//Components
import ButtonMove from "./Buttons/ButtonMove";
import ButtonsLeft from "./Buttons/ButtonsLeft";
import ButtonsTop from "./Buttons/ButtonsTop";
import Money from "./Money";
import Cards from "./Cards";
import User from "./User";
import Table from "./Table";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FaCompressAlt } from "react-icons/fa";
import Pot from "./Pot";
import UserNotCards from "./UserWithCards";
import { useEffect, useState } from "react";
const Poker = () => {
	const handle = useFullScreenHandle();
	const [justDeal, setJustDeal] = useState(true);
	const [cardsTable, setCardsTable] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setJustDeal(false);
			setCardsTable(false);
		}, 2000);
	});
	return (
		<>
		<FullScreen handle={handle}>	
		<main className=" bg-[url('../public/assets/backgroundPoker.jpg')] bg-no-repeat bg-cover left-0 top-0 h-screen w-screen overflow-hidden flex justify-center items-center">
			<div className=' absolute w-1024 h-1024 top-[10%]'>
				<ButtonsTop handle={handle}/>
				{/*ImagePokerTable*/}
				<div className='h-1024'>
					<Table />
					{/*POT*/}
					<Pot />
					{/*MoneyImg*/}
					<Money />
					{/*Cards*/}
					{cardsTable ? null : <Cards />}

					{/*Users*/}
					{justDeal ? <User /> : <UserNotCards />}
				</div>
				<div className='flex absolute justify-between top-[115%] w-full'>
					{/*Buttons play*/}
					<ButtonsLeft />
					{/*Buttons right*/}
					<ButtonMove />
				</div>
			</div>
		</main>
		</FullScreen></>
	);
};

export default Poker;
