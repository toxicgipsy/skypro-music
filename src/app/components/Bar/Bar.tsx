'use client';

import classNames from 'classnames';
import styles from './Bar.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  setIsPlaying,
  setNextTrack,
  toggleShuffle,
  setPreviousTrack,
} from '@/store/features/trackSlice';
import ProgressBar from '../ProgressBar/ProgressBar';
import { getTimePanel } from '@/utils/helper';

const Bar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlaying = useAppSelector((state) => state.tracks.isPlaying);
  const isShuffle = useAppSelector((state) => state.tracks.isShuffle);
  const dispatch = useAppDispatch();
  const [isLoop, setIsLoop] = useState(false);
  const [isLoadedTrack, setIsLoadedTrack] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    setIsLoadedTrack(false);
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrack]);

  const handlePlay = () => {
    dispatch(setIsPlaying(true));
  };

  const handlePause = () => {
    dispatch(setIsPlaying(false));
  };

  const handleEnded = () => {
    if (!isLoop) {
      dispatch(setNextTrack());
    }
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

  const onToggleLoop = () => {
    setIsLoop((previousValue) => !previousValue);
  };

  const handleAudioError = () => {
    dispatch(setIsPlaying(false));
    setIsLoadedTrack(false);
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoadedTrack(true);
    }
  };

  const onChangeProgess = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const inputTime = Number(e.target.value);
      audioRef.current.currentTime = inputTime;
      setCurrentTime(inputTime);
    }
  };

  const onNextTrack = () => {
    dispatch(setNextTrack());
  };

  const onToggleShuffle = () => {
    dispatch(toggleShuffle());
  };

  const onPreviousTrack = () => {
    dispatch(setPreviousTrack());
  };

  const timePanel = getTimePanel(currentTime, duration);

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        loop={isLoop}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadMetadata}
        onError={handleAudioError}
      ></audio>
      <div className={styles.progressContainer}>
        <span className={styles.timePanel}>{timePanel}</span>
        <ProgressBar
          max={duration}
          step={0.1}
          disabled={!isLoadedTrack}
          value={currentTime}
          onChange={onChangeProgess}
        />
      </div>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_block}>
          <div className={classNames(styles.bar__player, styles.player)}>
            <div className={styles.player__controls}>
              <div
                onClick={onPreviousTrack}
                className={styles.player__btn_prev}
              >
                <svg className={styles.player__btn_prev_svg}>
                  <use href="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div
                onClick={isPlaying ? pauseTrack : playTrack}
                className={classNames(styles.player__btn_play)}
              >
                <svg
                  className={styles.player__btn_play_svg}
                  viewBox="0 0 15 20"
                  aria-hidden="true"
                >
                  {isPlaying ? (
                    <>
                      <rect x="1" width="4" height="20" rx="1" fill="#d9d9d9" />
                      <rect
                        x="10"
                        width="4"
                        height="20"
                        rx="1"
                        fill="#d9d9d9"
                      />
                    </>
                  ) : (
                    <path d="M15 10L0 0.47372V19.5263L15 10Z" fill="#d9d9d9" />
                  )}
                </svg>
              </div>
              <div onClick={onNextTrack} className={styles.player__btn_next}>
                <svg className={styles.player__btn_next_svg}>
                  <use href="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div
                onClick={onToggleLoop}

                className={classNames(
                  styles.player__btn_repeat,
                  styles._btn_icon,
                  {
                    [styles._btn_active]: isLoop,
                  },
                )}
              >
                <svg className={styles.player__btn_repeat_svg}>
                  <use href="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div
                onClick={onToggleShuffle}
                className={classNames(
                  styles.player__btn_shuffle,
                  styles._btn_icon,
                  {
                    [styles._btn_active]: isShuffle,
                  },
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
                  min={0}
                  max={100}
                  value={volume}
                  name="range"
                  onChange={(e) => {
                    if (audioRef.current) {
                      audioRef.current.volume = Number(e.target.value) / 100;
                    }
                    setVolume(Number(e.target.value));
                  }}
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
