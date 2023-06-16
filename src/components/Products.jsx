import React from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';

const Products = () => {
  // States - products, loading and error
  const [products, setProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // *** Fetching with "then" - no error nor loading.
  // React.useEffect(() => {
  //   fetch('https://ranekapi.origamid.dev/json/api/produto')
  //     .then((response) => response.json())
  //     .then((json) => setProducts(json));
  // }, []);

  // A better way to fetch - using async functions
  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (erro) {
        setError('Error message...');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/`);
  }, []);

  if (loading) return <div className='loading'></div>;
  if (error) return <p>{error}</p>;

  if (products === null) return null;

  return (
    <section className={styles.products + ' animeLeft'}>
      <Head title='catalog_ | Welcome' description='A catalog web app' />
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <h1 className={styles.nome}>{product.nome}</h1>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};

export default Products;
