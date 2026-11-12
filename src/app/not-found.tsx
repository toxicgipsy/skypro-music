import Link from 'next/link';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Bar from './components/Bar/Bar';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.page}>
      <Navigation />

      <div className={styles.content}>
        <Search />

        <div className={styles.message}>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Страница не найдена 😭</h2>

          <p className={styles.description}>
            Возможно, она была удалена
            <br />
            или перенесена на другой адрес
          </p>

          <Link href="/music/main" className={styles.button}>
            Вернуться на главную
          </Link>
        </div>
      </div>

      <Link
        href="/auth/signin"
        className={styles.account}
        aria-label="Перейти к авторизации"
      >
        <svg width={43} height={43} aria-hidden="true">
          <use href="/img/icon/sprite.svg#logout" />
        </svg>
      </Link>

      <Bar />
    </div>
  );
};

export default NotFound;
