import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/index.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiArrowGoBackFill, RiTruckLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export default function Home() {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <div className={styles.collection}>
          <div className={styles.collection__content}>
            <h2 className={styles.collection__title}>
              New <span className={styles.collection__special}>in for</span>
              <span className={styles.collection__special}>woman</span>
            </h2>
            <Link href="/products/woman" className={styles.collection__btn}>
              <a className={styles.collection__btn}>
                See more
                <MdKeyboardArrowRight size="25" />
              </a>
            </Link>
          </div>
          <div className={styles.collection__photo}>
            <img
              className={styles.collection__img}
              src="./images/woman.webp"
              alt="man collection"
            />
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.collection__photo}>
            <img className={styles.collection__img} src="./images/man.webp" alt="man collection" />
          </div>
          <div className={styles.collection__content}>
            <h2 className={styles.collection__title}>
              New <span className={styles.collection__special}>in for</span>
              <span className={`${styles.collection__special} ${styles.collection__special__bg}`}>
                man
              </span>
            </h2>
            <Link href="/products/man" className={styles.collection__btn}>
              <a className={styles.collection__btn}>
                See more
                <MdKeyboardArrowRight size="25" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.feature}>
        <div className={styles.feature__wrapper}>
          <div className={styles.feature__form}>
            <h3 className={styles.feature__title}>subscribe for newsletter</h3>
            <form className={styles.form}>
              <input className={styles.form__input} placeholder="Email adress" type="text" />
              <button className={styles.form__btn} type="button">
                ok
              </button>
            </form>
          </div>
          <div className={styles.feature__box}>
            <RiTruckLine size={35} />
            <h3 className={styles.feature__title}>Free Shipping</h3>
            <p>Free shipping for orders over $25$</p>
          </div>
          <div className={styles.feature__box}>
            <RiArrowGoBackFill size={35} />
            <h3 className={styles.feature__title}>Return & Refund</h3>
            <p>Free 100% money back guarantee</p>
          </div>
          <div className={styles.feature__box}>
            <BiSupport size={35} />
            <h3 className={styles.feature__title}>Quality Support</h3>
            <p>Always online feedback 24/7</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
