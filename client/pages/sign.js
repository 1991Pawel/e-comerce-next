import { useState } from 'react';
import Layout from 'components/Layout/Layout';

export default function Form() {
  const [email, setEmail] = useState('test@wp.pl');
  const [password, setPassword] = useState('test12345');
  const [confirmPassword, setConfirmPassword] = useState('test12345');

  const submitForm = (e) => {
    e.preventDefault();
    console.log(password, email, confirmPassword);
  };
  return (
    <Layout>
      <h1>FORM</h1>
      <form onSubmit={submitForm}>
        <button type="submit">submit</button>
      </form>
    </Layout>
  );
}