import { data } from '@/data';
import { formatTime } from '@/utils/helper';
import Link from 'next/link';
import styles from './Track.module.css';

const Track = () => {
  return (
    <div className={styles.content__playlist}>
      {data.map((track) => (
        <div key={track._id} className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__title_image}>
                <svg className={styles.track__title_svg}>
                  <use href="img/icon/sprite.svg#icon-note" />
                </svg>
              </div>
              <div className={styles.track__title_text}>
                <Link className={styles.track__title_link} href="/tracks/guilt">
                  {track.name} <span className={styles.track__title_span} />
                </Link>
              </div>
            </div>
            <div className={styles.track__author}>
              <Link className={styles.track__author_link} href="/tracks/guilt">
                {track.author}
              </Link>
            </div>
            <div className={styles.track__album}>
              <Link className={styles.track__album_link} href="/tracks/guilt">
                {track.album}
              </Link>
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
      ))}
    </div>
  );
};

export default Track;
