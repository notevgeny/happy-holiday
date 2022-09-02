import style from "./Card.module.css";
import CardImage from "./CardImage/CardImage";
import Felicitation from "./Felicitation/Felicitation";

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <CardImage/>
        <Felicitation/>
      </div>
    </div>
  </div>
)

export default Card;