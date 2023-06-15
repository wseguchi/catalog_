import React from 'react';
import styles from './Logo.module.css';
import { BsGridFill } from 'react-icons/bs';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <BsGridFill className={styles.logoIcon} />
      cata
      <span className={styles.span}>log_</span>
    </h1>
  );
};

export default Logo;
