import Head from 'next/head';
import styles from '../../styles/pages/category.module.css';

import Layout from 'components/Layout/Layout';
import SideBar from '../../components/SideBar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:5000/products/category/${params.category}`);

  const products = await res.json();
  if (!products) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: { products, params }
  };
}

export default function Category({ products }) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <section className={styles.category}>
          <SideBar />
          <ProductList products={products} />
        </section>
      </div>
    </Layout>
  );
}
