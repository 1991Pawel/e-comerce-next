import styles from 'components/ProductList/productList.module.css';
import Link from 'next/link';

const Product = ({ product: { title, price, imgUrl, desc, id } }) => (
  <Link href={`/product/${id}`}>
    <a className={styles.link}>
      <li className={styles.product}>
        <img className={styles.product__img} src={imgUrl} alt={title} />
        <div className={styles.product__content}>
          <h4 className={styles.product__title}>{title}</h4>
          <p className={styles.product__desc}>{desc}</p>
          <span className={styles.product__price}>${price}</span>
        </div>
      </li>
    </a>
  </Link>
);

export default function ProductList({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
