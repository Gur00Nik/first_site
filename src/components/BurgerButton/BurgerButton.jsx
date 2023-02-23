import React, { useState } from "react";
import styles from "./BurgerButton.module.css";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
const BurgerButton = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  const onClose = () => {
    setActive(false);
  };
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(styles.burger, active && styles.burgerActive)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <BurgerMenu onClose={onClose} active={active} />
    </>
  );
};

export default BurgerButton;
