import { RiHeartLine } from 'react-icons/ri';
import Layout from '../../components/Layout/Layout';
import { products } from '../../data';
import styles from '../../styles/pages/product.module.css';
import SideBar from 'components/SideBar/Sidebar';

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
        <h1>This product doesn't exist</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <section className={styles.product}>
          <div className={styles.wrapper}>
            <SideBar />
            <div className={styles.product__inner}>
              <div className={styles.product__photo}>
                <img className={styles.product__img} src={product.imgUrl} alt="" />
              </div>
              <div className={styles.product__content}>
                <span className={styles.brand}>{product.brand}</span>
                <h5 className={styles.title}>{product.title}</h5>
                <p className={styles.desc}>{product.desc}</p>
                <span className={styles.price}>$ {product.price}</span>

                <div className={styles.product__btn__group}>
                  <div className={styles.product__select__group}>
                    <label className={styles.select__label} for="size">
                      Choose a size:
                    </label>
                    <select className={styles.select} name="size" id="size" form="">
                      <option className={styles.option} value="xs">
                        xs
                      </option>
                      <option className={styles.option} value="s">
                        s
                      </option>
                      <option className={styles.option} value="m">
                        m
                      </option>
                      <option className={styles.option} value="l">
                        l
                      </option>
                      <option className={styles.option} value="xl">
                        xl
                      </option>
                    </select>
                  </div>
                  <div className={styles.product__add__group}>
                    <button type="button" className={styles.product__btn}>
                      add to cart
                    </button>
                    <button type="button" className={styles.product__btn__favorite}>
                      <RiHeartLine size="25" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
};
export default ProductPage;
