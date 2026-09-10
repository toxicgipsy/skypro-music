'use client';

import { TrackProps } from '@/sharedTypes/sharedTypes';
import styles from './Track.module.css';
import { formatTime } from '@/utils/helper';
import { setCurrentTrack, setIsPlaying } from '@/store/features/trackSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const Track = ({ track }: TrackProps) => {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlaying);
  const isCurrentTrack = currentTrack?._id === track._id;

  const onClickTrack = () => {
    dispatch(setCurrentTrack(track));
    dispatch(setIsPlaying(true));
  };
  return (
    <div className={styles.playlist__item} onClick={onClickTrack}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            {isCurrentTrack ? (
              <span
                className={`${styles.playing_dot} ${isPlaying ? styles.playing_dot_active : ''}`}
              />
            ) : (
              <svg className={styles.track__title_svg}>
                <use href="img/icon/sprite.svg#icon-note" />
              </svg>
            )}
          </div>
          <div className={styles.track__title_text}>
            <span className={styles.track__title_link}>
              {track.name} <span className={styles.track__title_span} />
            </span>
          </div>
        </div>
        <div className={styles.track__author}>
          <span className={styles.track__author_link}>{track.author}</span>
        </div>
        <div className={styles.track__album}>
          <span className={styles.track__album_link}>{track.album}</span>
        </div>
        <div>
          <svg className={styles.track__time_svg}>
            <use href="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.track__time_text}>
            {formatTime(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
