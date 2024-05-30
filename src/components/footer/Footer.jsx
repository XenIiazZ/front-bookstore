import React from "react";
import style from "./style.module.scss";
import telegramIcon from "../../assets/icons/telegram.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <p><a href="https://t.me/AvitoHD">Свяжитесь с нами:</a></p>
          <img src={telegramIcon} alt="telegram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
