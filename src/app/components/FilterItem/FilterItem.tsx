import styles from './FilterItem.module.css';

const FilterItem = ({ title: 'исполнителю' }) => {
  return (
    <button
      type="button"
      onClick={() => toggleFilter('author')}
      className={styles.filter__button}
    >
      {title}
    </button>
  );
};

export default FilterItem;
