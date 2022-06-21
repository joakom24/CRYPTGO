import { useState } from "react";
import back from "../../../../public/assets/backArrow.png";
import { FaExpand } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link'
import AudioPlayer from "./AudioPlayer";
import { FaCompressAlt } from "react-icons/fa";
const ButtonsTop = ({handle}) => {
	return (
		<section className='flex '>
			{/*BackArrowIcon*/}
			<button>
				<Link href="/"><Image src={back} alt='backIcon' /></Link>
			</button>
			<div className='flex z-10 h-full w-full items-start justify-end gap-8'>
				{/*ExpandIcon*/}
				{handle.active ? <FaCompressAlt color='white' onClick={handle.exit} /> :  <FaExpand color='white' onClick={handle.enter} />}
				{/*AudioIcon*/}
				<AudioPlayer />
				
			</div>
		</section>
	);
};

export default ButtonsTop;
