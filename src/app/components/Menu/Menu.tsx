"use client";
import Image from "next/image";
import styles from "./Menu.module.css";
// import Link from "next/link";

const Menu = () => {
  return (
    <>
      <nav className={styles.main__nav}>
        <div className={styles.nav__logo}>
          <div className={styles.logo__image}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={113.33}
              height={17}
              priority
            />
          </div>
        </div>
        <div className={styles.nav__burger}>
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
        </div>
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                Главное
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="./signin" className={styles.menu__link}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
