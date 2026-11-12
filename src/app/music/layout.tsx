import { ReactNode } from 'react';
import Bar from '../components/Bar/Bar';
import Navigation from '../components/Navigation/Navigation';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './page.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

type MusicLayoutProps = {
  children: ReactNode;
};

const MusicLayout = ({ children }: MusicLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          {children}
          <Sidebar />
        </main>
        <footer className={styles.footer} />
      </div>
      <Bar />
    </div>
  );
};

export default MusicLayout;
