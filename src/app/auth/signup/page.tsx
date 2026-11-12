'use client';

import { AxiosError } from 'axios';
import styles from './signup.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { registerUser } from '@/app/services/auth/authsApi';
import { toast } from 'react-toastify';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMassage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };
  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMassage('');
    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      return setErrorMassage('Заполните все поля');
    }
    if (password !== repeatPassword) {
      return setErrorMassage('Пароли не совпадают');
    }
    setIsLoading(true);

    registerUser({ email, password, username: email })
      .then(() => {
        toast.success('Регистрация прошла успешно');
        router.push('/auth/signin');
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
        value={email}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={onChangePassword}
        value={password}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Повторите пароль"
        onChange={onChangeRepeatPassword}
        value={repeatPassword}
      />
      <div className={styles.errorContainer}>{errorMessage}</div>
      <button
        className={styles.modal__btnSignupEnt}
        onClick={onSubmit}
        disabled={isLoading}
      >
        Зарегистрироваться
      </button>
    </>
  );
};

export default Signup;
