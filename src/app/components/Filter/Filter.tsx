'use client';

import classNames from 'classnames';
import styles from './Filter.module.css';
import { useState } from 'react';
import { FilterName } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';
import { data } from '@/data';

const Filter = ({}) => {
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

  const authors = Array.from(new Set(data.map((track) => track.author)));
  const genres = Array.from(new Set(data.flatMap((track) => track.genre)));
  const yearOptions = ['По умолчанию', 'Сначала новые', 'Сначала старые'];
  const title = ['исполнителям', 'жанрам', 'годам'];

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
        title="жанрам"
        onClick={() => toggleFilter('genre')}
        activeFilter={activeFilter}
        nameFilter="genre"
        options={genres}
      />
      <FilterItem
        title="годам"
        onClick={() => toggleFilter('year')}
        activeFilter={activeFilter}
        nameFilter="year"
        options={yearOptions}
      />
    </div>
  );
};

export default Filter;
