import styles from '../Footer/footer.module.css';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.info}>
          <div className={styles.info__box}>
            <h3 className={styles.info__title}>Can we help you ?</h3>
            <ul className={styles.info__list}>
              <li className={styles.info__item}>Contact us</li>
              <li className={styles.info__item}>Shipping and Returns</li>
              <li className={styles.info__item}>FAQ</li>
              <li className={styles.info__item}>Privacy Policy</li>
              <li className={styles.info__item}>Cookie Policy </li>
            </ul>
          </div>
          <div className={styles.info__box}>
            <h3 className={styles.info__title}>About us</h3>
            <ul className={styles.info__list}>
              <li className={styles.info__item}>Careers</li>
              <li className={styles.info__item}>About Store</li>
              <li className={styles.info__item}>Blog</li>
            </ul>
          </div>
          <div className={styles.info__box}>
            <h3 className={styles.info__title}>Our services</h3>
            <ul className={styles.info__list}>
              <li className={styles.info__item}>Free shipping</li>
              <li className={styles.info__item}>Free returns</li>
              <li className={styles.info__item}>Support 24/7</li>
              <li className={styles.info__item}>Secure payment</li>
            </ul>
          </div>
          <div className={styles.info__box}>
            <h3 className={styles.info__title}>Social Media</h3>
            <ul className={styles.info__list}>
              <li className={styles.info__item}>
                <RiFacebookFill size={25} />
              </li>
              <li className={styles.info__item}>
                <RiInstagramLine size={25} />
              </li>
              <li className={styles.info__item}>
                <RiTwitterFill size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
