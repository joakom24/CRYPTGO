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
    } else {
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
    <section className="flex ">
      {/*BackArrowIcon*/}
      <button>
        <Image src={back} alt="backIcon" />
      </button>
      <div className="flex z-10 h-full w-full items-start justify-end gap-8">
        {/*ExpandIcon*/}
        <button onClick={() => fullscreenHandler()}>
          <Image
            src={expand}
            alt="expandIcon"
            onClick={() => fullscreenHandler()}
          />
        </button>
        {/*AudioIcon*/}
        <button>
          <Image src={audio} alt="audioIcon" />
        </button>
      </div>
    </section>
  );
};

export default ButtonsTop;
