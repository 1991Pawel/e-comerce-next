import Link from 'next/link';
import styles from '../Header/header.module.css';

import { RiShoppingBagLine, RiSearchLine, RiHeartLine } from 'react-icons/ri';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div>
          <Link href="/">
            <a>
              <img src="./logo.png" alt="" />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__item}>
              <Link href="/man">
                <a className={styles.nav__link}>man</a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/woman">
                <a className={styles.nav__link}>women</a>
              </Link>
            </li>
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
          <button className={styles.option}>
            <RiShoppingBagLine size="28" />
            <span className={styles.option__count}>5</span>
          </button>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </header>
  );
}
