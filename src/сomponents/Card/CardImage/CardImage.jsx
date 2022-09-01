import { useContext } from "react";
import { imgContext } from "../../../context/imgContextProvider";

const CardImage = ({img}) => {
  const image = useContext(imgContext);
  console.log(image);
  return (
    <img src={img} alt="Bg" width={840} height={520} />
  );
}



export default CardImage;