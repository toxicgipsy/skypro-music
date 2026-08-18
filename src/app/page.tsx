import Centerblock from '@components/Centerblock/Centerblock';
import styles from './page.module.css';
import Sidebar from '@components/Sidebar/Sidebar';
import Navigation from '@/app/components/Navigation/Navigation';
import Bar from '@/app/components/Bar/Bar';

export default function Home() {
  return (
    <>
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
