import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <div className={styles.collection}>
          <div className={styles.collection__content}>
            <h2 className={styles.collection__title}>
              New <span className={styles.collection__special}>in for</span>
              <span className={styles.collection__special}>women</span>
            </h2>
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
            <h2 className={styles.collection__title}>
              New <span className={styles.collection__special}>in for</span>
              <span className={`${styles.collection__special} ${styles.collection__special__bg}`}>
                man
              </span>
            </h2>
            <button className={styles.collection__btn}>See more</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
