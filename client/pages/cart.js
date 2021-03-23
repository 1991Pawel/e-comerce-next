import Link from 'next/link';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/cart.module.css';

export default function Cart() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2>Cart Page</h2>
        <div className={styles.cart}>
          <div className={styles.cart__products}>
            <div>products</div>
            <div>products</div>
            <div>products</div>
            <div>products</div>
            <div>products</div>
            <div>products</div>
            <div>products</div>
          </div>
          <div className={styles.cart__details}>
            <ul className={styles.cart__list}>
              <li className={styles.cart__list__item}>
                Total: <span className={styles.cart__list__subitem}>115$</span>
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
