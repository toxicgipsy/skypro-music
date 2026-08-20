'use client';
import Image from 'next/image';
import styles from './Navigation.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpenNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav((prev) => !prev);

  return (
    <>
      <nav className={styles.main__nav}>
        <div className={styles.nav__logo}>
          <div className={styles.logo__image}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={133}
              height={17}
              priority
            />
          </div>
        </div>
        <button
          type="button"
          onClick={toggleNav}
          className={styles.nav__burger}
        >
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
        </button>
        {isOpenNav && (
          <div className={styles.nav__menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link href="#" className={styles.menu__link}>
                  Главное
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="#" className={styles.menu__link}>
                  Мой плейлист
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="./signin" className={styles.menu__link}>
                  Войти
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
