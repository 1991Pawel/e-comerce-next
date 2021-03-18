import styles from 'components/ProductList/productList.module.css';

const Product = ({ product: { title, price, imgUrl, desc } }) => (
  <li className={styles.product}>
    <img className={styles.product__img} src={imgUrl} alt="" />
    <h4 className={styles.product__title}>{title}</h4>
    <p className={styles.product__desc}>{desc}</p>
    <span className={styles.product__price}>{price}</span>
  </li>
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
