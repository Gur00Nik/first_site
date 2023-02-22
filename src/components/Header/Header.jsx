import React from "react";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import "./Header.css";
import PhoneIcon from "../../images/phone.svg";
import MailIcon from "../../images/mail.svg";
import BurgerButton from "../BurgerButton/BurgerButton";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <nav className="nav">
          <a href="index.html#stageWork" className="header__link">
            Этапы работы
          </a>
          <a href="index.html#Gallery" className="header__link">
            Галерея
          </a>
          <a href="index.html#Footer" className="header__link">
            Контакты
          </a>
        </nav>
        <div className="header__contacts">
          <Link
            href="tel:+79621620835"
            icon={<img src={PhoneIcon} />}
            text="+7(962)162-08-35"
          />
          <Link
            href="mailto:lutenkov33@gmail.com"
            icon={<img src={MailIcon} />}
            text="lutenkov33@gmail.com"
          />
        </div>
        <BurgerButton />
      </div>
    </div>
  );
};

export default Header;
