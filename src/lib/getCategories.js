import CallIcon from "../assets/icons/call.svg";
import CubeIcon from "../assets/icons/cube.svg";
import ImagesIcon from "../assets/icons/images.svg";
import MarketingIcon from "../assets/icons/marketing.svg";
import TargetIcon from "../assets/icons/target.svg";

export const getCategories = async () => {
  return [
    { id: 1, name: "해외 마케팅", icon: MarketingIcon},
    { id: 2, name: "퍼블리셔", icon: ImagesIcon},
    { id: 3, name: "개드린(제도사)", icon: CubeIcon },
    { id: 4, name: "해외 세일즈", icon: TargetIcon},
    { id: 5, name: "해외 CS", icon: CallIcon },
  ];
};
