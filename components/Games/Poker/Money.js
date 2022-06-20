import Image from "next/image";
import money from "../../../public/assets/MonedasCasino/GrupodeMoneda6.png";
import money2 from "../../../public/assets/MonedasCasino/GrupodeMoneda5.png";
import money3 from "../../../public/assets/MonedasCasino/GrupodeMoneda4.png";
import money4 from "../../../public/assets/MonedasCasino/GrupodeMoneda3.png";
const Money = () => {
	return (
		<div>
			<div className='absolute flex items-center justify-center  left-[33%] top-[70%] '>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>1000</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[25%] top-[55%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>1000</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[27%] top-[38%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money4} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>200</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[48%] top-[70%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money3} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>300</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[62%] top-[70%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money2} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>500</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[70%] top-[55%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>1000</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[67%] top-[38%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money4} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>200</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[37%] top-[28%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money2} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>500</h5>
				</div>
			</div>
			<div className='absolute flex items-center justify-center left-[58%] top-[28%]'>
				<div className='z-10 bg-pot rounded-full h-6'>
					<Image src={money} alt='money' width={21} height={30} />
				</div>
				<div className='border-1 border-solid border-white rounded-money w-10  mt-1 absolute flex justify-end left-3'>
					<h5 className='text-white pr-1 text-xs'>1000</h5>
				</div>
			</div>
		</div>
	);
};

export default Money;
