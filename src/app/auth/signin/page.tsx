'use client';

import { authUser, getTokens } from '@/app/services/auth/authsApi';
import styles from './signin.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMassage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMassage('');
    if (!email.trim() || !password.trim()) {
      return setErrorMassage('Заполните все поля');
    }
    setIsLoading(true);

    authUser({ email, password })
      .then((user) => {
        return getTokens({ email, password }).then((token) => {
          return { user, token };
        });
      })
      .then(({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access', token.access);
        localStorage.setItem('refresh', token.refresh);

        router.push('/music/main/');
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            toast.error(
              error.response.data?.message || 'Не удалось выполнить запрос',
            );
          } else if (error.request) {
            toast.error('Не удалось связаться с сервером');
          } else {
            toast.error('Неизвестная ошибка');
          }
        } else {
          toast.error('Неизвестная ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Link href="/music/main">
        <div className={styles.modal__logo}>
          <Image src="/img/logo_modal.png" alt="logo" width={133} height={17} />
        </div>
      </Link>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
        onChange={onChangeMail}
      />
      <input
        className={classNames(styles.modal__input)}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={onChangePassword}
      />
      <div className={styles.errorContainer}>{errorMessage}</div>
      <button
        disabled={isLoading}
        onClick={onSubmit}
        className={styles.modal__btnEnter}
      >
        Войти
      </button>
      <Link href={'/auth/signup'} className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
};

export default Signin;
