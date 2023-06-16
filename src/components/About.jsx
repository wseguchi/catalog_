import React from 'react';
import image from '../img/about.jpeg';
import styles from './About.module.css';
import Head from './Head';

const About = () => {
  return (
    <section className={`${styles.about} animeLeft`}>
      <Head title='WM | About' description='Contact us' />
      <img src={image} alt='Old Typewritter' />
      <div>
        <h1>About</h1>
        <p>A dinamic catalog web app build with React.</p>
        <h1 className={styles.marginTop}>Project main goals</h1>
        <ul className={styles.dados}>
          <li>
            Develop a React App using{' '}
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              Vite
            </a>
            , instead of CRA - Create React App.
          </li>
          <li>Practise routing with React Routes.</li>
          <li>
            Fetch data from a Rest API using async functions and the useEffect
            hook.
          </li>
          <li>Use CSS transitions for each section.</li>
          <li>
            Consume icons from the{' '}
            <a
              href='https://react-icons.github.io/react-icons'
              target='_blank'
              rel='noreferrer'
            >
              React Icons
            </a>{' '}
            library.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
