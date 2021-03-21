import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../SideBar/sideBar.module.css';

const categoryItems = ['t-shirt', 'jeans', 'polo', 'jacket', 'shoes'];
export default function SideBar({ categoryName }) {
  const router = useRouter();
  if (!categoryName) {
    return (
      <aside className={styles.sidebar}>
        <button className={styles.sidebar__btn} onClick={() => router.back()}>
          back
        </button>
      </aside>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <h3>
        <Link href={`/products/${categoryName}`}>
          <a className={styles.sidebar__title}>{categoryName}</a>
        </Link>
      </h3>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          {categoryItems.map((item) => (
            <li key={item} className={styles.sidebar__item}>
              <Link href={`/products/${categoryName}/?category=${item}`}>
                <a className={styles.sidebar__link}>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
