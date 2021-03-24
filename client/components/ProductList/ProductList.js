import Link from 'next/link';
import styles from 'components/ProductList/productList.module.css';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Product = ({ product: { title, price, imgUrl, desc, _id } }) => (
  <Link href={`/product/${_id}`}>
    <a className={styles.link}>
      <li className={styles.product}>
        <div className={styles.product__photo}>
          <img className={styles.product__img} src={imgUrl} alt={title} />
        </div>
        <div className={styles.product__content}>
          <h4 className={styles.product__title}>{title}</h4>
          <p className={styles.product__desc}>{desc}</p>
          <span className={styles.product__price}>${price}</span>
        </div>
      </li>
    </a>
  </Link>
);

export default function ProductList({ products, loading }) {
  if (loading) {
    return (
      <ul className={styles.products}>
        <LoadingSpinner />
      </ul>
    );
  }
  if (!products.length) {
    return (
      <ul className={styles.products}>
        <h2>no products found</h2>
      </ul>
    );
  }
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
