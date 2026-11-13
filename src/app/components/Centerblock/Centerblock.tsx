'use client';

import Search from '@components/Search/Search';
import styles from './Centerblock.module.css';
import classNames from 'classnames';
import Playlist from '../Playlist/Playlist';
import Filter from '@components/Filter/Filter';
import { CenterblockProps } from '@/sharedTypes/sharedTypes';
import Skeleton from 'react-loading-skeleton';
import PlaylistSkeleton from '../PlaylistSkeleton/PlaylistSkeleton';

const Centerblock = ({
  tracks,
  title = 'Треки',
  isLoading = false,
  message,
}: CenterblockProps) => {
  return (
    <div className={classNames(styles.main__centerblock)}>
      <Search />
      <h2 className={styles.centerblock__h2}>
        {isLoading ? (
          <Skeleton width="60%" baseColor="#313131" highlightColor="#444" />
        ) : (
          title
        )}
      </h2>

      {isLoading ? (
        <div className={styles.filterSkeleton} aria-label="Загрузка фильтров">
          {[0, 1, 2].map((item) => (
            <Skeleton
              key={item}
              width={140}
              height={40}
              borderRadius={20}
              baseColor="#313131"
              highlightColor="#444"
            />
          ))}
        </div>
      ) : (
        <Filter tracks={tracks} />
      )}

      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlist_title__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlist_title__col, styles.col04)}>
            <svg className={styles.playlist_title__svg}>
              <use href="/img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        {isLoading ? (
          <PlaylistSkeleton />
        ) : message ? (
          <p role="status">{message}</p>
        ) : tracks.length === 0 ? (
          <p>В этом списке нет треков</p>
        ) : (
          <Playlist tracks={tracks} />
        )}
      </div>
    </div>
  );
};

export default Centerblock;
