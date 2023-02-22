import React from "react";
import "../Footer/Footer.css";
import Link from "../Link/Link";
import PhoneIcon from "../../images/phone.svg";
import MailIcon from "../../images/mail.svg";
import TimeIcon from "../../images/time.svg";
import VkIcon from "../../images/vk.svg";
import WhatsupIcon from "../../images/whatsup.svg";
import ViberIcon from "../../images/viber.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__heading">
          <h1>Контакты</h1>
        </div>
        <div className="footer__content">
          <div className="phone">
            <div>
              <img className="icon" src={PhoneIcon}></img>
            </div>
            <div className="phone__number">
              <Link text="+7(962)162-08-35" />
              <Link text="+7(962)156-92-91" />
            </div>
          </div>
          <div className="mail">
            <Link
              icon={<img className="icon" src={MailIcon} />}
              text="lutenkov33@gmail.com"
            />
          </div>
          <div className="timetable">
            <div>
              <img className="icon" src={TimeIcon}></img>
            </div>
            <div>
              <h2>Время работы: Ежедневно, с 8 до 18-00.</h2>
            </div>
          </div>
          <div className="messengers">
            <div>
              <img className="icon" src={VkIcon}></img>
            </div>
            <div>
              <img className="icon" src={WhatsupIcon}></img>
            </div>
            <div>
              <img className="icon" src={ViberIcon}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
