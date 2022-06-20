import React, { Fragment, useEffect, useState } from "react";
import ACora from "../../../public/assets/Corazones/ACora.png";
import JPica from "../../../public/assets/Pica/JPica.png";
import Back from "../../../public/assets/CartaBack.png";
import Image from "next/image";
const Card = () => {
	const [card, setCard] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setCard(true);
		}, 2000);
	});
	return (
		<div className='top-[35%] absolute flex gap-2'>
			{card ? (
				<Fragment>
					<div>
						<Image src={ACora} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={ACora} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={JPica} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardBack' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardBack' width={53} height={78} />
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div>
						<Image src={Back} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardhearth' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardBack' width={53} height={78} />
					</div>
					<div>
						<Image src={Back} alt='cardBack' width={53} height={78} />
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default Card;
