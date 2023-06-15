import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import Head from './Head';

const Product = () => {
  // States - products, loading and error
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    // A better way to fetch, using async functions
    async function fetchProduct(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (erro) {
        setError('Error message...');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`http://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className='loading'></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;

  return (
    <section className={styles.product + ' animeLeft'}>
      <Head
        title={`WM | ${product.nome}`}
        description={`Product: ${product.nome}`}
      />
      <div>
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div className={styles.info}>
        <h1>{product.nome}</h1>
        <div>
          <span className={styles.preco}>R$ {product.preco}</span>
        </div>
        <p>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
