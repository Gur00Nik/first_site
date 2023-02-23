import React from "react";
import styles from "./BurgerMenu.module.css";
import clsx from "clsx";
const BurgerMenu = ({ active, onClose }) => {
  return (
    <>
      {active && <div className={styles.back} onClick ={onClose}></div>}

      <div className={clsx(styles.panel, active && styles.panelActive)}></div>
    </>
  );
};

export default BurgerMenu;
