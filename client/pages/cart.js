import Link from 'next/link';
import { VscTrash } from 'react-icons/vsc';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/cart.module.css';

export default function Cart() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Cart</h2>
        <div className={styles.cart}>
          <ul className={styles.cart__products}>
            <li className={styles.cart__product}>
              <div className={styles.cart__content}>
                <div className={styles.cart__photo}>
                  <img
                    src="https://img01.ztat.net/article/spp-media-p1/6b9588908fdf34a09cfed934eac0bb68/51f9f1a5ac8142cd9f8e9ceb838e49cd.jpg?imwidth=300"
                    alt=""
                  />
                </div>
                <div className={styles.cart__desc}>
                  <h5 className={styles.desc__title}>t-shirt</h5>
                  <h5 className={styles.desc__subtitle}>Lorem ipsum dolor sit amet.</h5>
                </div>
              </div>
              <div className={styles.cart__quantity}>
                <button className={styles.cart__quantity__btn}>-</button>
                <span className={styles.cart__quantity__number}>5</span>
                <button className={styles.cart__quantity__btn}>+</button>
              </div>
              <div className={styles.cart__price}>
                <span>$546</span>
              </div>
              <button className={styles.cart__product__btn}>
                <VscTrash />
              </button>
            </li>
            <li className={styles.cart__product}>
              <div className={styles.cart__content}>
                <div className={styles.cart__photo}>
                  <img
                    src="https://img01.ztat.net/article/spp-media-p1/6b9588908fdf34a09cfed934eac0bb68/51f9f1a5ac8142cd9f8e9ceb838e49cd.jpg?imwidth=300"
                    alt=""
                  />
                </div>
                <div className={styles.cart__desc}>
                  <h5 className={styles.desc__title}>t-shirt</h5>
                  <h5 className={styles.desc__subtitle}>Lorem ipsum dolor sit amet.</h5>
                </div>
              </div>
              <div className={styles.cart__quantity}>
                <button className={styles.cart__quantity__btn}>-</button>
                <span className={styles.cart__quantity__number}>5</span>
                <button className={styles.cart__quantity__btn}>+</button>
              </div>
              <div className={styles.cart__price}>
                <span>$546</span>
              </div>
              <button className={styles.cart__product__btn}>
                <VscTrash />
              </button>
            </li>
          </ul>
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
