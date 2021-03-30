import Head from 'next/head';
import styles from '../../styles/pages/category.module.css';
import Layout from 'components/Layout/Layout';
import SideBar from '../../components/SideBar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';
import { useLoadingState } from '../../utlis/useLoadingState';
import { fetchData } from '../../utlis/fetchData';

export async function getServerSideProps({ params, query }) {
  const baseUrl = `${process.env.BASE_URL}/products/category/${params.page}`;
  const fetchUrl = query.category ? `${baseUrl}?category=${query.category}` : baseUrl;
  const products = await fetchData(fetchUrl);

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
