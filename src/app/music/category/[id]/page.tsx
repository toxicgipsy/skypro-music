'use client';

import Centerblock from '@/app/components/Centerblock/Centerblock';
import { getTracks, getSelection } from '@/app/services/tracks/tracksApi';
import { Track } from '@/sharedTypes/sharedTypes';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CategoryPage = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const params = useParams<{ id: string }>();

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setTracks([]);
    setTitle('Подборка');
    setMessage('');

    Promise.all([getSelection(params.id), getTracks()])
      .then(([selection, allTracks]) => {
        if (!active) return;

        if (selection === null) {
          setMessage('Подборка не найден');
          return;
        }

        const selectedTracks = selection.items
          .map((id) => allTracks.find((track) => track._id === id))
          .filter((track) => track != undefined);

        setTracks(selectedTracks);
        setTitle(selection.name ?? 'Подборка');
      })
      .catch(() => {
        if (!active) return;

        const text = 'Не удалось загрузить подборку';
        setMessage(text);
        toast.error(text);
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, [params.id]);

  return (
    <Centerblock
      tracks={tracks}
      title={title}
      isLoading={isLoading}
      message={message}
    />
  );
};

export default CategoryPage;
