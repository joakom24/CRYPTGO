import back from "../../../../assets/backArrow.png";
import expand from "../../../../assets/expandIcon.png";
import audio from "../../../../assets/audioIcon.png";
import Image from "next/image";
const ButtonsTop = () => {
  return (
    <div>
      {/*BackArrowIcon*/}
      <button className=" absolute left-[11.17%] right-[88.29%] top-[7.42%] bottom-[90.92%] ">
        <Image src={back} alt="backIcon" />
      </button>
      {/*ExpandIcon*/}
      <button className=" absolute left-[84.71%] right-[14.08%] top-[7.23%] bottom-[90.82%]">
        <Image src={expand} alt="expandIcon" />
      </button>
      {/*AudioIcon*/}
      <button className=" absolute left-[87.4%]  top-[7.42%]  ">
        <Image src={audio} alt="audioIcon" />
      </button>
    </div>
  );
};

export default ButtonsTop;
