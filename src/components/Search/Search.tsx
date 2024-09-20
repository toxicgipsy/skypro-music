"use client";
import classNames from "classnames";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={classNames(styles.centerblock__search, styles.search)}>
      <svg className={styles.search__svg}>
        <use href="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export default Search;
