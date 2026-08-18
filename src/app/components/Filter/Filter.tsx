'use client';

import classNames from 'classnames';
import styles from './Filter.module.css';
import { useState } from 'react';
import { FilterName } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';
import { data } from '@/data';
import { getUniqueValuesByKey } from '@/utils/helper';

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState<FilterName | null>(null);
  const toggleFilter = (nameFilter: FilterName) => {
    setActiveFilter((previousFilter) => {
      if (previousFilter === nameFilter) {
        return null;
      } else {
        return nameFilter;
      }
    });
  };

  const authors = getUniqueValuesByKey(data, 'author');
  const genres = getUniqueValuesByKey(data, 'genre');
  const yearOptions = ['По умолчанию', 'Сначала новые', 'Сначала старые'];

  return (
    <div className={classNames(styles.centerblock__filter)}>
      <div className={styles.filter__title}>Искать по:</div>
      <FilterItem
        title="исполнителю"
        onClick={() => toggleFilter('author')}
        activeFilter={activeFilter}
        nameFilter="author"
        options={authors}
      />
      <FilterItem
        title="году выпуска"
        onClick={() => toggleFilter('year')}
        activeFilter={activeFilter}
        nameFilter="year"
        options={yearOptions}
      />
      <FilterItem
        title="жанру"
        onClick={() => toggleFilter('genre')}
        activeFilter={activeFilter}
        nameFilter="genre"
        options={genres}
      />
    </div>
  );
};

export default Filter;
