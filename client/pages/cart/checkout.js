import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCartContext } from '../../context/CartContext';
import { VscTrash } from 'react-icons/vsc';
import Layout from 'components/Layout/Layout';
import { MdAddShoppingCart } from 'react-icons/md';
import useAuth from '../../utlis/useAuth';

export default function Checkout() {
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(!user?.token);
    if (!user?.token) {
      router.push('/user/login');
    }
  }, [user]);

  return (
    <Layout>
      <div className="wrapper">
        <h2>Checkout Page</h2>
        <p>checkout is in progress</p>
        <p>Only logged user can see this content :)</p>
      </div>
    </Layout>
  );
}
