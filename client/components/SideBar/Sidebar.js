import Link from 'next/link';
import styles from '../SideBar/sideBar.module.css';

export default function SideBar({ products, params }) {
  return (
    <aside className={styles.sidebar}>
      {console.log(products)}
      <h2 className={styles.sidebar__title}>{params?.category}</h2>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item}>
            <Link href="/product/name">
              <a className={styles.sidebar__link}>T-shirt</a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/product/name">
              <a className={styles.sidebar__link}>Jeans</a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/product/name">
              <a className={styles.sidebar__link}>Polo</a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/product/name">
              <a className={styles.sidebar__link}>Shoes</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
