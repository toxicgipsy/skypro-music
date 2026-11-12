import classNames from 'classnames';
import styles from './Sidebar.module.css';
import SelectionCard from '../SelectionCard/SelectionCard';

const Sidebar = () => {
  return (
    <div className={classNames(styles.main__sidebar)}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Aman</p>
        <div className={styles.sidebar__icon}>
          <svg>
            <use href="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <SelectionCard
              id={2}
              src="/img/playlist01.png"
              title="Плейлист дня"
            />
          </div>
          <div className={styles.sidebar__item}>
            <SelectionCard
              id={3}
              src="/img/playlist02.png"
              title="Танцевальные хиты"
            />
          </div>
          <div className={styles.sidebar__item}>
            <SelectionCard
              id={4}
              src="/img/playlist03.png"
              title="Инди-заряд"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
