import React from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch('http://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  if (products === null) return null;

  return (
    <section className={styles.products + ' animeLeft'}>
      <Head title="Wildo's Marketplace" description='Marketplace' />
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
