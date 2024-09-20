"use client";
import { useState } from "react";
import styles from "./Filter.module.css";
import classNames from "classnames";

const Filter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const toggleFilter = () => {
    setIsOpenFilter((prevState) => !prevState);
  };

  return (
    <>
      {isOpenFilter && (
        <div className={classNames(styles.centerblock__filter, styles.filter)}>
          <div onClick={toggleFilter} className={styles.filter__title}>
            Искать по:
          </div>
          <div onClick={toggleFilter} className={styles.filter__button}>
            исполнителю
          </div>
          <div onClick={toggleFilter} className={styles.filter__button}>
            году выпуска
          </div>
          <div onClick={toggleFilter} className={styles.filter__button}>
            жанру
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
