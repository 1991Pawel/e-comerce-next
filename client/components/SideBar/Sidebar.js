import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../SideBar/sideBar.module.css';

const staticPath = ['t-shirt', 'jeans', 'polo', 'jacket', 'shoes'];

export default function SideBar({ params }) {
  const router = useRouter();
  if (!params) {
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
      <h2 className={styles.sidebar__title}>{params.category[0]}</h2>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          {staticPath.map((path) => (
            <li key={path} className={styles.sidebar__item}>
              <Link href={`/products/${params.category[0]}/${path}`}>
                <a className={styles.sidebar__link}>{path}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
