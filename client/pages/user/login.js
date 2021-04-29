import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../styles/pages/loginAndRegister.module.css';
import useForm from '../../utlis/useForm';
import useAuth from '../../utlis/useAuth';

const initialState = {
  email: 'haslo@wp.pl',
  password: 'haslo123'
};

export default function Login() {
  const { values, setValues, handleChange } = useForm(initialState);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signin`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      login(data);
      router.back();
    } else {
      setError(data.message);
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <h2>Login</h2>
        <span>Sign in with email and password</span>
        {error && <span className={styles.error}>{error}</span>}
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={values.password}
            onChange={(e) => handleChange(e)}
            label="Password"
            required
          />

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>

        <p>you dont have account ?</p>
        <Link href="/user/register">
          <a>click here</a>
        </Link>
      </div>
    </Layout>
  );
}
