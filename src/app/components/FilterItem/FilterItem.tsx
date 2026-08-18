import { FilterItemProps } from '@/sharedTypes/sharedTypes';
import styles from './FilterItem.module.css';
import classNames from 'classnames';

const FilterItem = ({
  title,
  onClick,
  activeFilter,
  nameFilter,
  options,
}: FilterItemProps) => {
  return (
    <div className={classNames(styles.filter__item)}>
      <button
        type="button"
        onClick={onClick}
        className={classNames(styles.filter__button, {
          [styles.active]: activeFilter === nameFilter,
        })}
      >
        {title}
      </button>
      {activeFilter === nameFilter && (
        <div className={classNames(styles.filter__dropdown)}>
          <ul className={classNames(styles.filter__list)}>
            {options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterItem;
