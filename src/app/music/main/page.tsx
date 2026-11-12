'use client';

import Centerblock from '@components/Centerblock/Centerblock';
import { useEffect, useState } from 'react';
import { Track } from '@/sharedTypes/sharedTypes';
import { AxiosError } from 'axios';
import { getTracks } from '@/app/services/tracks/tracksApi';
import { toast } from 'react-toastify';

const Home = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then((response) => {
        setTracks(response);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            toast.error(
              error.response.data?.message || 'Не удалось выполнить запрос',
            );
          } else if (error.request) {
            toast.error('Не удалось связаться с сервером');
          } else {
            toast.error('Неизвестная ошибка');
          }
        } else {
          toast.error('Неизвестная ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Centerblock tracks={tracks} isLoading={isLoading} />
    </>
  );
};

export default Home;
