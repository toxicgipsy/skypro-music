'use client';

import Centerblock from '@components/Centerblock/Centerblock';
import styles from './page.module.css';
import Sidebar from '@components/Sidebar/Sidebar';
import Navigation from '@/app/components/Navigation/Navigation';
import Bar from '@/app/components/Bar/Bar';
import { useEffect, useState } from 'react';
import getTracks from '@/app/services/tracks/tracksAPI';
import { Track } from '@/sharedTypes/sharedTypes';
import { error } from 'console';
import { AxiosError } from 'axios';

const Home = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTracks()
      .then((response) => {
        setTracks(response);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            setError('Пропал интернет');
          } else {
            setError('Неизвестная ошибка');
          }
        }
      });
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            {error}
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
};

export default Home;
