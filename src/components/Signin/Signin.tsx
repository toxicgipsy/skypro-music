"use client";
import Image from "next/image";
import styles from "./Signin.module.css";
import classNames from "classnames";

const Signin = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
            <a href="../">
              <div className={styles.modal__logo}>
                <Image src="/img/logo_modal.png" alt="logo" />
              </div>
            </a>
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
              <a href="../index.html">Войти</a>
            </button>
            <button className={styles.modal__btn_signup}>
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Signin;
