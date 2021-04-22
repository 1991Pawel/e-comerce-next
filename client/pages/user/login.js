import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../styles/pages/loginAndRegister.module.css';

const initialState = {
  email: '',
  password: ''
};

export default function Login() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('send form');
  };

  return (
    <Layout>
      <div className="wrapper">
        <h2>Login</h2>
        <span>Sign in with email and password</span>
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
