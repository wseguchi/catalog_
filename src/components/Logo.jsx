import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      cata
      <span className={styles.span}>log</span>
    </h1>
  );
};

export default Logo;
