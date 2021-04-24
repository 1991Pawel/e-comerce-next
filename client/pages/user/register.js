import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../styles/pages/loginAndRegister.module.css';
import useForm from '../../utlis/useForm';

const initialState = {
  email: '',
  password: ''
};

export default function register() {
  const { values, setValues, handleChange } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('send form');
  };

  return (
    <Layout>
      <div className="wrapper">
        <h2>I do not have account</h2>
        <span>Sign up with email and password</span>
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={(e) => handleChange(e)}
            label="Confirm Password"
            required
          />
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
        <p>you already have account ?</p>
        <Link className={styles.button} href="/user/login">
          <a>click here</a>
        </Link>
      </div>
    </Layout>
  );
}
