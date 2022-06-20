import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Howl } from "howler";
import { useEffect, useState } from "react";

const AudioPlayer = ({ loop }) => {
	const [playing, setPlaying] = useState(false);
	const [audio] = useState(
		new Howl({
			src: ["assets/sound/background-music-1.mp3"],
			loop,
		})
	);

	const toggle = () => {
		if (playing) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	useEffect(() => {
		audio.play();
	}, []);

	return (
		<div>
			<div
				className='absolute right-[0%] top-[0%] '
				onClick={() => {
					setPlaying(!playing);
					toggle();
				}}>
				{playing ? (
					<FaVolumeMute color='white' />
				) : (
					<FaVolumeUp color='white' />
				)}
			</div>
		</div>
	);
};

export default AudioPlayer;
