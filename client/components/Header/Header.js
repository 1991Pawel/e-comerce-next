import Link from 'next/link';
import styles from 'components/Header/header.module.css';
import CartDropDown from 'components/CartDropDown/CartDropDown';
import { useCartContext } from '../../context/CartContext';
import IconButton from 'components/IconButton/IconButton';
import useAuth from '../../utlis/useAuth';

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
  const { cartItems } = useCartContext();
  const { user, login } = useAuth();
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
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
          <IconButton variant="heart" />
          <IconButton variant="search" />
          <CartDropDown products={cartItems} />
          {user?.token ? (
            <button onClick={() => login(null)} className={styles.button}>
              Logout
            </button>
          ) : (
            <Link href="/user/login">
              <a className={styles.button}>Login</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
