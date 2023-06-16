import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Product.module.css';
import Head from './Head';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

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
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className='loading'></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;

  return (
    <section className={styles.product + ' animeLeft'}>
      <Head
        title={`catalog_ | ${product.nome}`}
        description={`Product: ${product.nome}`}
      />
      <div>
        <img
          key={product.fotos[0].src}
          src={product.fotos[0].src}
          alt={product.fotos[0].titulo}
        />
      </div>

      <div className={styles.info}>
        <h1>{product.nome}</h1>
        <div>
          <span className={styles.preco}>
            $ {Intl.NumberFormat().format(product.preco)}
          </span>
        </div>
        <p>{product.descricao}</p>
        <Link to='/'>
          <BsArrowLeftSquareFill className={styles.icon} />
        </Link>
      </div>
    </section>
  );
};

export default Product;
