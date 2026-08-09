import Image from 'next/image';
import styles from './Signin.module.css';
import classNames from 'classnames';
import Link from 'next/link';

const Signin = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
            <Link href="../">
              <div className={styles.modal__logo}>
                <Image src="/img/logo_modal.png" alt="logo" />
              </div>
            </Link>
            <input
              className={classNames(styles.modal__input, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={classNames(styles.modal__input, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modal__btn_enter}>
              <Link href="../index.html">Войти</Link>
            </button>
            <button className={styles.modal__btn_signup}>
              <Link href="signup.html">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Signin;
