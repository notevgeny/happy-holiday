import { useContext } from "react";
import { imgContext } from "../../../context/imgContextProvider";
import CardBG from "../../../img/card-bg.jpg";

const CardImage = () => {
  const {urlImg} = useContext(imgContext);
  return (
    <img src={urlImg || CardBG} alt="Bg" width={840} height={520} />
  );
}



export default CardImage;