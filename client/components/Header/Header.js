import Link from 'next/link';
import styles from '../Header/header.module.css';

import { RiShoppingBagLine, RiSearchLine, RiHeartLine } from 'react-icons/ri';

const path = [
  {
    name: 'man',
    href: '/products/man'
  },
  {
    name: 'woman',
    href: '/products/woman'
  }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div>
          <Link href="/">
            <a>
              <img src={'../logo.png'} alt="logo" />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__menu}>
            {path.map(({ name, href }) => (
              <li key={name} className={styles.nav__item}>
                <Link href={href}>
                  <a className={styles.nav__link}>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.options}>
          <button className={styles.option}>
            <RiHeartLine size="28" />
            <span className={styles.option__count}>5</span>
          </button>
          <button className={styles.option}>
            <RiSearchLine size="28" />
          </button>
          <div tabIndex="0" className={`${styles.option} ${styles.cartDropDown}`}>
            <RiShoppingBagLine size="28" />
            <span className={styles.option__count}>5</span>
            <div className={styles.cartDropDown__wrapper}>
              <ul className={styles.cartDropDown__list}>
                <li className={styles.cartDropDown__item}>
                  <img
                    className={styles.cartDropDown__img}
                    src="https://img01.ztat.net/article/spp-media-p1/55754006ead239ce9fd89305cae3a52b/72db90b328144456a44c76defc9de8a9.jpg?imwidth=303&filter=packshot"
                    alt=""
                  />

                  <div className={styles.cartDropDown__content}>
                    <span className={styles.cartDropDown__title}>title</span>
                    <span className={styles.cartDropDown__size}>size: m</span>
                    <span className={styles.cartDropDown__quantity}>quantity: 2</span>
                    <span className={styles.cartDropDown__price}>price: 55$</span>
                  </div>
                </li>
                <li className={styles.cartDropDown__item}>
                  <img
                    className={styles.cartDropDown__img}
                    src="https://img01.ztat.net/article/spp-media-p1/55754006ead239ce9fd89305cae3a52b/72db90b328144456a44c76defc9de8a9.jpg?imwidth=303&filter=packshot"
                    alt=""
                  />

                  <div className={styles.cartDropDown__content}>
                    <span className={styles.cartDropDown__title}>title</span>
                    <span className={styles.cartDropDown__size}>size: m</span>
                    <span className={styles.cartDropDown__quantity}>quantity: 2</span>
                    <span className={styles.cartDropDown__price}>price: 55$</span>
                  </div>
                </li>
              </ul>
              <div className={styles.cartDropDown__footer}>
                <Link href="/cart">
                  <a className={styles.cartDropDown__link}>Go to cart</a>
                </Link>
              </div>
            </div>
          </div>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </header>
  );
}
