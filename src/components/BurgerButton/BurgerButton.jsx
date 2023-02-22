import React, { useState } from "react";
import styles from "./BurgerButton.module.css";
import clsx from "clsx";
const BurgerButton = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <button
      onClick={onClick}
      className={clsx(styles.burger, active && styles.burgerActive)}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default BurgerButton;
