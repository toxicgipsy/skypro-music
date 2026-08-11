'use client';

import classNames from 'classnames';
import styles from './Search.module.css';
import { useState } from 'react';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={classNames(styles.centerblock__search)}>
      <svg className={styles.search__svg}>
        <use href="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={onSearchInput}
      />
    </div>
  );
};

export default Search;
