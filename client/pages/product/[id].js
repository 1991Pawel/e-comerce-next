import React, { useState } from 'react';
import { RiHeartLine } from 'react-icons/ri';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/pages/product.module.css';
import SideBar from 'components/SideBar/Sidebar';
import { useRouter } from 'next/router';
import { useCartContext } from '../../context/CartContext';

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:5000/products/${params.id}`);

  const product = await res.json();
  if (!product._id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: { product, params }
  };
}

const ProductPage = ({ product, params }) => {
  const [size, setSize] = useState('');
  const productSize = JSON.parse(product.size);
  const { addItemToCart } = useCartContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (size) {
      const selectedProduct = {
        ...product,
        size
      };
      addItemToCart(selectedProduct);
      console.log('product add');
      setSize('');
    }
  };

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  if (!product._id) {
    return (
      <Layout>
        {console.log(value)}
        <section className={styles.product}>
          <div className={styles.wrapper}>
            <SideBar categoryName={product.gender} />
            <h1>This product doesn't exist</h1>
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <section className={styles.product}>
          <div className={styles.wrapper}>
            <SideBar categoryName={product.gender} />
            <div className={styles.product__inner}>
              <div className={styles.product__photo}>
                <img className={styles.product__img} src={product.imgUrl} alt="" />
              </div>
              <div className={styles.product__content}>
                <span className={styles.brand}>{product.brand}</span>
                <h5 className={styles.title}>{product.title}</h5>
                <p className={styles.desc}>{product.desc}</p>
                <span className={styles.price}>$ {product.price}</span>
                <form onSubmit={submitHandler}>
                  <div className={styles.product__btn__group}>
                    <div className={styles.product__select__group}>
                      <label className={styles.select__label} htmlFor="size">
                        Choose a size:
                      </label>
                      <select
                        required
                        onChange={handleChange}
                        className={styles.select}
                        name="size"
                        id="size">
                        {!size ? (
                          <option selected value="size" className={styles.option}>
                            {!size && 'size'}
                          </option>
                        ) : null}
                        {productSize.map((s) => (
                          <option key={s} className={styles.option} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.product__add__group}>
                      <button type="submit" className={styles.product__btn}>
                        add to cart
                      </button>
                      <button type="button" className={styles.product__btn__favorite}>
                        <RiHeartLine size="25" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
};
export default ProductPage;
