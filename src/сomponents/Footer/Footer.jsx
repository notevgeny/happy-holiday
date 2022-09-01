import Container from "../Container/Container";
import style from "./Footer.module.css";
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TelegramIcon } from "../../img/tg.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as SUIcon } from "../../img/stumbleupon.svg";

const Footer = () => (

  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.authors}>
          <div>Design: <a href="https://t.me/Marshmallowww">Anastasia Ilina</a></div>
          <div>Сoder: <a href="https://t.me/pushka_evg">Evgeny</a></div>
          <div>© HBCard, 2022</div>
        </div>
      
        <div className={style.socials}>
          <a href="https://vk.com" className={style.link}>
            <VKIcon />
          </a>
          <a href="https://t.me" className={style.link}>
            <TelegramIcon/>
          </a>
          <a href="https://pinterest.com" className={style.link}>
            <PinterestIcon/>
          </a>
          <a href="https://stumbleupon.com" className={style.link}>
            <SUIcon/>
          </a>
        </div>
      </div>

    </Container>
  </footer>
);

export default Footer;