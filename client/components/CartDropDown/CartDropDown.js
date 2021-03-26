import Link from 'next/link';
import styles from 'components/CartDropDown/cartDropDown.module.css';
import { useCartContext } from '../../context/CartContext';
import IconButton from 'components/IconButton/IconButton';

export default function CartDropDown({ products }) {
  return (
    <div tabIndex="0" className={styles.cartDropDown}>
      <button className={styles.cart__btn}>
        <IconButton products={products} variant="cart" />
      </button>
      <div className={styles.cartDropDown__wrapper}>
        <ul className={styles.cartDropDown__list}>
          {products.map((product, _idx) => (
            <li key={_idx} className={styles.cartDropDown__item}>
              <img className={styles.cartDropDown__img} src={product.imgUrl} alt={product.desc} />
              <div className={styles.cartDropDown__content}>
                <span className={styles.cartDropDown__title}>{product.category}</span>
                <span className={styles.cartDropDown__size}>size: {product.size}</span>
                <span className={styles.cartDropDown__quantity}>quantity: {product.quantity}</span>
                <span className={styles.cartDropDown__price}>price: {product.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.cartDropDown__footer}>
          <Link href="/cart">
            <a className={styles.cartDropDown__link}>Go to cart</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
