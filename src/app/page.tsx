import Head from 'next/head';
import Link from 'next/link';
import Centerblock from '@components/Centerblock/Centerblock';
import styles from './page.module.css';
import Sidebar from '@components/Sidebar/Sidebar';
import Navigation from '@/app/components/Navigation/Navigation';
import Bar from '@/app/components/Bar/Bar';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="stylesheet" href="/css/style.css" />
        <title>Skypro</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Navigation />
            <Centerblock />
            <Sidebar />
          </main>
          <footer className={styles.footer} />
        </div>
        <Bar />
      </div>
    </>
  );
}
