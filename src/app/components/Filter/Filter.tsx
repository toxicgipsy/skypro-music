'use client';

import classNames from 'classnames';
import styles from './Filter.module.css';
import { useState } from 'react';
import { FilterName } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';

const trackList = [
  {
    author: 'Alexander Nakarada',
    genre: ['Классическая музыка'],
    year: '2005-06-11',
  },
  {
    author: 'Frank Schroter',
    genre: ['Классическая музыка'],
    year: '2019-06-12',
  },
  {
    author: 'Kevin Macleod',
    genre: ['Классическая музыка'],
    year: '2022-04-16',
  },
  {
    author: 'Mixkit',
    genre: ['Классическая музыка'],
    year: '1972-06-06',
  },
  {
    author: 'Waltz Piano',
    genre: ['Классическая музыка'],
    year: '2003-05-12',
  },
];

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

  const authors = trackList.map((track) => track.author);
  const genres = trackList.flatMap((track) => track.genre);
  const yearOptions = ['По умолчанию', 'Сначала новые', 'Сначала старые'];
  const title = ['исполнителям', 'жанрам', 'годам'];

  return (
    <div className={classNames(styles.centerblock__filter)}>
      <div className={styles.filter__title}>Искать по:</div>
      <FilterItem title="исполнителю" />
    </div>
  );
};

export default Filter;
