'use client';

import classNames from 'classnames';
import styles from './Filter.module.css';
import { useState } from 'react';
import { FilterName, FilterProps } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';
import { getUniqueValuesByKey } from '@/utils/helper';

const Filter = ({ tracks }: FilterProps) => {
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

  const authors = getUniqueValuesByKey(tracks, 'author');
  const genres = getUniqueValuesByKey(tracks, 'genre');
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
