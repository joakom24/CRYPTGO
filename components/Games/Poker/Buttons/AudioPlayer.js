import {FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import {Howl, Howler} from 'howler';
import store from "../../../../store/reducers/store";
import setVolume from "../../../../store/actionCreators/setVolume";
import { useEffect, useState } from "react";

const AudioPlayer = ({ url, loop, slider, list }) => {
    const [playing, setPlaying] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(store.getState().volume);
  
    const [audio] = useState(new Howl({
      src: [url],
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
        <div
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
      
    </div>

  )
}

export default AudioPlayer