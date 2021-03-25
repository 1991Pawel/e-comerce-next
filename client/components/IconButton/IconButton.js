import { RiSearchLine, RiHeartLine, RiShoppingBagLine } from 'react-icons/ri';
import styles from 'components/IconButton/iconButton.module.css';

const variantToComponent = {
  search: RiSearchLine,
  heart: RiHeartLine,
  cart: RiShoppingBagLine
};

export default function IconButton({ variant, products }) {
  const Component = variantToComponent[variant];
  return (
    <div className={styles.wrapper}>
      <Component className={styles.option} size={28} />
      {products?.length ? <span className={styles.option__count}>{products.length}</span> : null}
    </div>
  );
}
