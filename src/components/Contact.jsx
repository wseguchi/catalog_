import React from 'react';
import styles from './Contact.module.css';
import image from '../img/contact.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title='WM | Contact' description='Contact us' />
      <img src={image} alt='Old Typewritter' />
      <div>
        <h1>Contact us at:</h1>
        <ul className={styles.dados}>
          <li>wseguchi@gmail.com</li>
          <li>(204) 952-4662</li>
          <li>Winnipeg, MB</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
