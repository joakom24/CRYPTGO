import { useState } from "react";
import back from "../../../../assets/backArrow.png";
import expand from "../../../../assets/expandIcon.png";
import audio from "../../../../assets/audioIcon.png";
import Image from "next/image";
const ButtonsTop = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const fullscreenHandler = () => {
    const elem = document.querySelector("#gameview");
    if (fullscreen && document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    } else if (!fullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    return setFullscreen(!fullscreen);
  };

  return (
    <div>
      {/*BackArrowIcon*/}
      <button className=" absolute left-[11.17%] right-[88.29%] top-[7.42%] bottom-[90.92%] ">
        <Image src={back} alt="backIcon" />
      </button>
      {/*ExpandIcon*/}
      <button
        className=" absolute left-[84.71%] right-[14.08%] top-[7.23%] bottom-[90.82%]"
        onClick={() => fullscreenHandler()}
      >
        <Image
          src={expand}
          alt="expandIcon"
          onClick={() => fullscreenHandler()}
        />
      </button>
      {/*AudioIcon*/}
      <button className=" absolute left-[87.4%]  top-[7.42%]  ">
        <Image src={audio} alt="audioIcon" />
      </button>
    </div>
  );
};

export default ButtonsTop;
