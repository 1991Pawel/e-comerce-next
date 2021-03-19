import Head from 'next/head';
import styles from '../styles/pages/man.module.css';

import Layout from 'components/Layout/Layout';
import SideBar from '../components/SideBar/Sidebar';
import ProductList from '../components/ProductList/ProductList';

import { products } from '../data';

export default function Woman() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2>WOMAN</h2>
        <section className={styles.man}>
          <SideBar />
          <ProductList products={products} />
        </section>
      </div>
    </Layout>
  );
}
