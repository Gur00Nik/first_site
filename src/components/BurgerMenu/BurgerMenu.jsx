import React from "react";
import styles from "./BurgerMenu.module.css";
import clsx from "clsx";
import { useContext } from "react";
import { BurgerMenuContext } from "../../contexts/BurgerMenuContext/BurgerMenuContext";
const BurgerMenu = () => {
  const { active, onClose } = useContext(BurgerMenuContext);
  return (
    <>
      {active && <div className={styles.back} onClick={onClose}></div>}

      <div className={clsx(styles.panel, active && styles.panelActive)}></div>
    </>
  );
};

export default BurgerMenu;
