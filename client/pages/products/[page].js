import Head from 'next/head';
import styles from '../../styles/pages/category.module.css';
import Layout from 'components/Layout/Layout';
import SideBar from '../../components/SideBar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';
import { useLoadingState } from '../../utlis/useLoadingState';
export async function getServerSideProps({ params, query }) {
  const baseUrl = `http://localhost:5000/products/category/${params.page}`;
  const fetchUrl = query.category ? `${baseUrl}?category=${query.category}` : baseUrl;

  const res = await fetch(fetchUrl);

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
    props: { products, query }
  };
}

export default function ProductsPage({ products, query: { page } }) {
  const { loading } = useLoadingState();
  return (
    <Layout>
      <div className={styles.wrapper}>
        <section className={styles.category}>
          <SideBar categoryName={page} />
          <ProductList loading={loading} products={products} />
        </section>
      </div>
    </Layout>
  );
}
