'use client';

import classNames from 'classnames';
import styles from './Bar.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect, useRef } from 'react';
import { setIsPlaying } from '@/store/features/trackSlice';

const Bar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlaying);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentTrack) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => {
        dispatch(setIsPlaying(false));
      });
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying, dispatch]);

  const handlePlay = () => {
    dispatch(setIsPlaying(true));
  };

  const handlePause = () => {
    dispatch(setIsPlaying(false));
  };

  const handleEnded = () => {
    dispatch(setIsPlaying(false));
  };

  if (!currentTrack) return null;

  const playTrack = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.play().catch(() => {
      dispatch(setIsPlaying(false));
    });
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      ></audio>
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
                  <use
                    href={
                      isPlaying
                        ? '/img/icon/sprite.svg#icon-pause'
                        : '/img/icon/sprite.svg#icon-play'
                    }
                  />
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
                  <span className={styles.track_play__author_link}>
                    {currentTrack.name}
                  </span>
                </div>
                <div className={styles.track_play__album}>
                  <span className={styles.track_play__album_link}>
                    {currentTrack.author}
                  </span>
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
