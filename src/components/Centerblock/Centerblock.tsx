"use client";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import styles from "./Centerblock.module.css";
import classNames from "classnames";

const Centerblock = () => {
  return (
    <div className={classNames(styles.main__centerblock, styles.centerblock)}>
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
        <div className={styles.content__playlist}>
          <div className={styles.playlist__item}>
            <div className={styles.playlist__track}>
              <div className={styles.track__title}>
                <div className={styles.track__title_image}>
                  <svg className={styles.track__title_svg}>
                    <use href="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className={styles.track__title_text}>
                  <a className={styles.track__title_link} href="http://">
                    Guilt <span className={styles.track__title_span} />
                  </a>
                </div>
              </div>
              <div className={styles.track__author}>
                <a className={styles.track__author_link} href="http://">
                  Nero
                </a>
              </div>
              <div className={styles.track__album}>
                <a className={styles.track__album_link} href="http://">
                  Welcome Reality
                </a>
              </div>
              <div className={styles.track__time}>
                <svg className={styles.track__time_svg}>
                  <use href="img/icon/sprite.svg#icon-like" />
                </svg>
                <span className={styles.track__time_text}>4:44</span>
              </div>
            </div>
          </div>
          <div className={styles.playlist__item}>
            <div className={styles.playlist__track}>
              <div className={styles.track__title}>
                <div className={styles.track__title_image}>
                  <svg className={styles.track__title_svg}>
                    <use href="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className={styles.track__title_text}>
                  <a className={styles.track__title_link} href="http://">
                    Elektro <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className={styles.track__author}>
                <a className={styles.track__author_link} href="http://">
                  Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className={styles.track__album}>
                <a className={styles.track__album_link} href="http://">
                  Elektro
                </a>
              </div>
              <div className={styles.track__time}>
                <svg className={styles.track__time_svg}>
                  <use href="img/icon/sprite.svg#icon-like" />
                </svg>
                <span className={styles.track__time_text}>2:22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centerblock;
