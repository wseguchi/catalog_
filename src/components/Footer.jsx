import React from 'react';
import styles from './Footer.module.css';
import { TbNoCopyright } from 'react-icons/tb';

const Fotter = () => {
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/wseguchi' target='_blank'>
        Designed and coded by Wildson Seguchi
      </a>
      <div className={styles.copyright}>
        <TbNoCopyright />
        <p>Some rights reserved.</p>
      </div>
    </footer>
  );
};

export default Fotter;
