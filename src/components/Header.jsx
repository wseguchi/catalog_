import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to='catalog_/' end>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to='catalog_/contact'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to='catalog_/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
