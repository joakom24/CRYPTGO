import Image from "next/image";
import memoji from "../../../public/assets/3memoji.png";
import memoji2 from "../../../public/assets/2memoji.png";
import memoji3 from "../../../public/assets/memoji3.png";
import memoji4 from "../../../public/assets/1memoji.png";
import cardOne from "../../../public/assets/Diamante/6Diamante.png";
import cardTwo from "../../../public/assets/Pica/6Pica.png";
import Back from "../../../public/assets/CartaBack.png";
import letter from "../../../public/assets/letter.png";
import { useEffect, useState } from "react";
const User = () => {
	return (
		<div>
			<div className='rounded-full absolute bg-userPoker shadow-7xl  h-[23%] w-[9%] top-[96%] z-10 left-[39.5%] flex justify-center'>
				<div className='bg-userPoker2 h-[82%] w-[80%] rounded-full   m-auto shadow-4xl'>
					<div className='absolute h-[60%] w-[60%]  mt-[9%] ml-[9%] rounded-full shadow-8xl'>
						<Image src={memoji4} alt='icon' className=' rounded-full' />
					</div>
				</div>
			</div>
			<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-userSeven to-userEight border-2 border-borderUser2 h-[12%] flex justify-center items-center flex-col top-[105%] left-[46%]'>
				<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
					Jorge
				</h1>
				<h3 className='font-medium text-white text-sm'>10.000,00</h3>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser h-[19%] w-[7%] top-[81%] left-[16%] flex justify-center items-center'>
					<div className='h-[85%] w-[85%]   rounded-full shadow-8xl absolute z-10'>
						<Image src={memoji} alt='icon' />
					</div>
				</div>

				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-[12%] flex justify-center items-center flex-col top-[85.6%] left-[20.5%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Juan
					</h1>
					<h3 className='font-medium text-white text-sm'>10.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser2 h-[19%] w-[7%] top-[48%] z-10 left-[4%] flex justify-center items-center'>
					<div className='rounded-full shadow-8xl absolute h-[85%] w-[85%]'>
						<Image src={memoji} alt='icon' />
					</div>
				</div>

				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-[12%] flex justify-center items-center flex-col top-[53%] left-[8%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Sofía
					</h1>
					<h3 className='font-medium text-white text-sm'>20.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser h-[19%] w-[7%] top-[20.5%] z-10 left-[7.5%] flex justify-center items-center'>
					<div className='rounded-full absolute shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-[12%] flex justify-center items-center flex-col top-[25.5%] left-[11.5%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						María
					</h1>
					<h3 className='font-medium text-white text-sm'>10.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser h-[19%] w-[7%] top-[-4%] z-10  left-[20%] flex justify-center items-center'>
					<div className='rounded-full absolute  shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-[12%] flex justify-center items-center flex-col top-[1%] left-[24%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Belu
					</h1>
					<h3 className='font-medium text-white text-sm'>50.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser3 h-[19%] w-[7%] top-[-12%] z-10  left-[47%] flex justify-center items-center'>
					<div className='rounded-full absolute  shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
					<div className='top-[113%] left-[16%] absolute'>
						<Image src={Back} alt='card' width={53} height={78} />
					</div>
					<div className='top-[112%] left-[17%] absolute'>
						<Image src={Back} alt='card' width={53} height={78} />
					</div>
					<div className='top-[111%] left-[18%] absolute'>
						<Image src={Back} alt='card' width={53} height={78} />
					</div>
					<div className='top-[110%] left-[19%] absolute'>
						<Image src={Back} alt='card' width={53} height={78} />
					</div>
					<div className='top-[109%] left-[20%] absolute'>
						<Image src={Back} alt='card' width={53} height={78} />
					</div>
					<div className='absolute h-[0%] bottom right-0'>
						<Image src={letter} alt='icon' width={60} />
					</div>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser3 h-[19%] w-[7%] top-[-4%] z-10  left-[65%] flex justify-center items-center'>
					<div className='rounded-full absolute  shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-[12%] flex justify-center items-center flex-col top-[1%] left-[69%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Joaquín
					</h1>
					<h3 className='font-medium text-white text-sm'>120.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser3 h-[19%] w-[7%] top-[20.5%] z-10 left-[74%] flex justify-center items-center'>
					<div className='rounded-full absolute shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-userFive to-userSix border-1 border-borderUser3 h-[12%] flex justify-center items-center flex-col top-[25.5%] left-[78%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Agustina
					</h1>
					<h3 className='font-medium text-white text-sm'>5.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser2 h-[19%] w-[7%] top-[48%] z-10 left-[79.5%] flex justify-center items-center'>
					<div className='rounded-full absolute shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-userThree to-userFour border-1 border-borderUser2 h-[12%] flex justify-center items-center flex-col top-[53%] left-[84%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Fernanda
					</h1>
					<h3 className='font-medium text-white text-sm'>220.000,00</h3>
				</div>
			</div>
			<div>
				<div className='rounded-full absolute bg-borderUser h-[19%] w-[7%] top-[81%] z-10 left-[65%] flex justify-center items-center'>
					<div className='rounded-full absolute  shadow-8xl  h-[85%] w-[85%] '>
						<Image src={memoji} alt='icon' />
					</div>
				</div>
				<div className='absolute rounded-sm w-[14%] bg-gradient-to-l from-user to-userTwo border-1 border-borderUser h-[12%] flex justify-center items-center flex-col top-[85.6%] left-[69%]'>
					<h1 className='font-medium text-white text-l drop-shadow-6xl leading-6'>
						Manuel
					</h1>
					<h3 className='font-medium text-white text-sm'>10.000,00</h3>
				</div>
			</div>
		</div>
	);
};

export default User;
