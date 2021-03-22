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
          <button className={`${styles.option} ${styles.cartDropDown}`}>
            <RiShoppingBagLine size="28" />
            <span className={styles.option__count}>5</span>
            <ul className={styles.cartDropDown__list}>
              <li className={styles.cartDropDown__item}>item</li>
              <li className={styles.cartDropDown__item}>item</li>
              <li className={styles.cartDropDown__item}>item</li>
              <li className={styles.cartDropDown__item}>item</li>
              <li className={styles.cartDropDown__item}>item</li>
            </ul>
          </button>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </header>
  );
}
