import Link from 'next/link';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
