import Search from '@components/Search/Search';
import styles from './Centerblock.module.css';
import classNames from 'classnames';
import Track from '../Track/Track';
import Filter from '@components/Filter/Filter';

const Centerblock = () => {
  return (
    <div className={classNames(styles.main__centerblock)}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
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
        <Track />
      </div>
    </div>
  );
};

export default Centerblock;
