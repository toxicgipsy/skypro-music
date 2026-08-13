import Search from '@components/Search/Search';
import styles from './Centerblock.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { data } from '@/app/data';
import { formatTime } from '@/app/utils/helper';

const Centerblock = () => {
  return (
    <div className={classNames(styles.main__centerblock)}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={classNames(styles.centerblock__filter)}>
        <div className={styles.filter__title}>Искать по:</div>
        <div className={styles.filter__button}>исполнителю</div>
        <div className={styles.filter__button}>году выпуска</div>
        <div className={styles.filter__button}>жанру</div>
      </div>
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
              <use href="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
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
                    <Link
                      className={styles.track__title_link}
                      href="/tracks/guilt"
                    >
                      {track.name} <span className={styles.track__title_span} />
                    </Link>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <Link
                    className={styles.track__author_link}
                    href="/tracks/guilt"
                  >
                    {track.author}
                  </Link>
                </div>
                <div className={styles.track__album}>
                  <Link
                    className={styles.track__album_link}
                    href="/tracks/guilt"
                  >
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
      </div>
    </div>
  );
};

export default Centerblock;
