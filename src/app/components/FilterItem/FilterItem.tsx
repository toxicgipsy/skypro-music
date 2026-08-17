import styles from './FilterItem.module.css';
import classNames from 'classnames';

type FilterItemProps = {
  title: string;
  onClick: () => void;
  activeFilter: 'author' | 'genre' | 'year' | null;
  nameFilter: 'author' | 'genre' | 'year';
  options: string[];
};

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
        <div className={classNames(styles.filter__dropdown)}></div>
      )}
    </div>
  );
};

export default FilterItem;
