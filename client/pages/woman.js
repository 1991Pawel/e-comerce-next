import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import styles from '../styles/pages/man.module.css';

import { products } from '../data';
import ProductList from '../components/ProductList/ProductList';

export default function Woman() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2>WOMEN</h2>
        <section className={styles.man}>
          <aside className={styles.aside}>ASIDE</aside>
          <ProductList products={products} />
        </section>
      </div>
    </Layout>
  );
}
