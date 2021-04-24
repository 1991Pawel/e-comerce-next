import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
export default function useAuth() {
  const [storedValue, setValue] = useLocalStorage('user', []);

  const [user, setUser] = useState(storedValue || null);

  useEffect(() => {
    setUser(storedValue);
  }, [storedValue]);

  const login = (user) => setValue(user);

  return {
    login,
    user
  };
}
