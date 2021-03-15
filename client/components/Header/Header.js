import { RiShoppingBagLine, RiSearchLine, RiHeartLine } from 'react-icons/ri';
import styles from '../Header/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>Logo</div>
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
