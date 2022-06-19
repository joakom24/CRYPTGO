import {FaArrowLeft, FaArrowRight, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import {Howl, Howler} from 'howler';
import store from "../../../../store/reducers/store";
import setVolume from "../../../../store/actionCreators/setVolume";
import { useEffect, useState } from "react";

const AudioPlayer = ({ loop, slider, list }) => {
    const [playing, setPlaying] = useState(true);
    const [volumeLevel, setVolumeLevel] = useState(store.getState().volume);
  
    const [audio] = useState(new Howl({
      src: ['assets/sound/background-music-1.mp3'],
      loop
    }))
  
    const toggle = () => {
      if(playing){
        audio.play();
      }else{
        audio.pause();
      }
    }
    
    Howler.volume(store.getState().volume);
    useEffect(()=>{
      audio.play()
    }, [])
  
    useEffect(()=>{
      setVolume(volumeLevel);
    }, [volumeLevel])
  
  return (
    <div>
      <div className="absolute right-[0%] top-[0%] " onClick={() => {setPlaying(!playing); toggle()}}>{!playing ? <FaVolumeMute color="white"/> : <FaVolumeUp color="white"/>}</div>
      {slider && !playing ? 
        <input
        className="absolute top-[1%] right-[1%] z-99 h-1 w-3 bg-user opacity-5 transition-duration 2s redounded-full border-2"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volumeLevel}
          onChange={event => {
            setVolumeLevel(event.target.valueAsNumber)
          }} 
        />
      : ''}
      {list && !playing ? (
        <div className="flex items-center justify-center cursor-pointer bg-user border-2 p-2">
          <button><FaArrowLeft/></button>
          <button><FaArrowRight/></button>
        </div>
      ) : ''}

    </div>

  )
}

export default AudioPlayer