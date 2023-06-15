import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span className={styles.span}>_market</span>place
    </h1>
  );
};

export default Logo;
