'use client';

import classNames from 'classnames';
import styles from './Bar.module.css';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect, useRef } from 'react';
import { setIsPlaying } from '@/store/features/trackSlice';

const Bar = () => {
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlaying);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack, dispatch]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!currentTrack) return null;

  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    }
  };

  return (
    <div className={styles.bar}>
      <audio controls ref={audioRef} src={currentTrack?.track_file}></audio>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress} />
        <div className={styles.bar__player_block}>
          <div className={classNames(styles.bar__player, styles.player)}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <svg className={styles.player__btn_prev_svg}>
                  <use href="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div
                onClick={isPlaying ? pauseTrack : playTrack}
                className={classNames(styles.player__btn_play)}
              >
                <svg className={styles.player__btn_play_svg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </svg>
              </div>
              <div className={styles.player__btn_next}>
                <svg className={styles.player__btn_next_svg}>
                  <use href="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btn_repeat,
                  styles._btn_icon,
                )}
              >
                <svg className={styles.player__btn_repeat_svg}>
                  <use href="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div
                className={classNames(
                  styles.player__btn_shuffle,
                  styles._btn_icon,
                )}
              >
                <svg className={styles.player__btn_shuffle_svg}>
                  <use href="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>
            <div className={classNames(styles.player__track_play)}>
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <svg className={styles.track_play__svg}>
                    <use href="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className={styles.track_play__author}>
                  <Link
                    className={styles.track_play__author_link}
                    href="/tracks/guilt"
                  >
                    {currentTrack.name}
                  </Link>
                </div>
                <div className={styles.track_play__album}>
                  <Link
                    className={styles.track_play__album_link}
                    href="/tracks/guilt"
                  >
                    {currentTrack.author}
                  </Link>
                </div>
              </div>
              <div className={styles.track_play__like_dis}>
                <div
                  className={classNames(
                    styles.track_play__like,
                    styles._btn_icon,
                  )}
                >
                  <svg className={styles.track_play__like_svg}>
                    <use href="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.track_play__dislike,
                    styles._btn_icon,
                  )}
                >
                  <svg className={styles.track_play__dislike_svg}>
                    <use href="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.bar__volume_block)}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use href="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={classNames(styles.volume__progress, styles._btn)}>
                <input
                  className={classNames(
                    styles.volume__progress_line,
                    styles._btn,
                  )}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
