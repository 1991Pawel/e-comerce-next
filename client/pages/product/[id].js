import Layout from '../../components/Layout/Layout';
import { products } from '../../data';

import { useRouter } from 'next/router';

const ProductPage = () => {
  // static products
  const { query } = useRouter();
  let id = query.id;
  const product = products.filter((product) => product.id == id)[0];

  console.log(product);

  if (!product) {
    return (
      <Layout>
        <h1>This product doesn' t exist</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>ProductPage {id}</h1>
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>{product.price}</p>
        <img src={product.imgUrl} alt="" />
      </Layout>
    );
  }
};
export default ProductPage;
