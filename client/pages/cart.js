import Link from 'next/link';
import { useCartContext } from '../context/CartContext';
import { VscTrash } from 'react-icons/vsc';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/cart.module.css';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Cart() {
  const {
    cartItems,
    totalPrice,
    decrementItemFromCart,
    removeItemFromCart,
    incrementItemFromCart
  } = useCartContext();

  if (!cartItems.length) {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.empty__info}>
            <h3 className={styles.empty__text}>NO ITEMS IN CART</h3>
            <MdAddShoppingCart size={100} />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Cart</h2>
        <div className={styles.cart}>
          <ul className={styles.cart__products}>
            {cartItems?.map((product, idx) => (
              <li key={idx} className={styles.cart__product}>
                <div className={styles.cart__content}>
                  <div className={styles.cart__photo}>
                    <img src={product.imgUrl} alt={product.desc} />
                  </div>
                  <div className={styles.cart__desc}>
                    <h5 className={styles.desc__title}>{product.category}</h5>
                    <h5 className={styles.desc__subtitle}>{product.brand}</h5>
                    <h5 className={styles.desc__subtitle}>size : {product.size}</h5>
                  </div>
                </div>
                <div className={styles.cart__quantity}>
                  <button
                    onClick={() => decrementItemFromCart(product._id, product.size)}
                    className={styles.cart__quantity__btn}>
                    -
                  </button>
                  <span className={styles.cart__quantity__number}>{product.quantity}</span>
                  <button
                    onClick={() => incrementItemFromCart(product._id, product.size)}
                    className={styles.cart__quantity__btn}>
                    +
                  </button>
                </div>
                <div className={styles.cart__price}>
                  <span>$ {(product.price * product.quantity).toFixed(2)}</span>
                </div>
                <button
                  onClick={() => removeItemFromCart(product._id, product.size)}
                  className={styles.cart__product__btn}>
                  <VscTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.cart__details}>
            <ul className={styles.cart__list}>
              <li className={styles.cart__list__item}>
                Total: <span className={styles.cart__list__subitem}>$ {totalPrice()}</span>
              </li>
              <li className={styles.cart__list__item}>
                Delivery: <span className={styles.cart__list__subitem}>free delivery</span>
              </li>
            </ul>
            <Link href="/cart">
              <a className={styles.cart__btn} href="">
                Go to checkout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
