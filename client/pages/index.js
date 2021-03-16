import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <div className={styles.collection}>
          <div className={styles.collection__content}>
            <h2 className={styles.collection__title}>New in for woman</h2>
            <button className={styles.collection__btn}>See more</button>
          </div>
          <div className={styles.collection__photo}>
            <img
              className={styles.collection__img}
              src="./images/women.jpg"
              alt="women collection"
            />
          </div>
        </div>
        <div className={styles.collection}>
          <div className={styles.collection__photo}>
            <img className={styles.collection__img} src="./images/man.jpg" alt="man collection" />
          </div>
          <div className={styles.collection__content}>
            <h2 className={styles.collection__title}>New in for woman</h2>
            <button className={styles.collection__btn}>See more</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
