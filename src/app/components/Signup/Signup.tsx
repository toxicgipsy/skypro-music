import Image from "next/image";
import styles from "./Signup.module.css";
import classNames from "classnames";

const Signup = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login}>
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
              className={classNames(styles.modal__input, styles.password_first)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={classNames(
                styles.modal__input,
                styles.password_double
              )}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modal__btn_signup_ent}>
              <a href="../index.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Signup;
