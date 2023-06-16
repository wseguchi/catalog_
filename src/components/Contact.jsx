import React from 'react';
import styles from './Contact.module.css';
import image from '../img/contact.jpg';
import Head from './Head';
import { BiMailSend, BiPhone, BiLocationPlus } from 'react-icons/bi';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title='catalog_ | Contact' description='Contact us' />
      <img src={image} alt='Old Typewritter' />
      <div>
        <h1>Contact us at</h1>
        <ul className={styles.dados}>
          <li>
            <BiMailSend className={styles.icon} />
            wseguchi@gmail.com
          </li>
          <li>
            <BiPhone className={styles.icon} />
            (204) 952-4662
          </li>
          <li>
            <BiLocationPlus className={styles.icon} />
            Winnipeg, MB
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
