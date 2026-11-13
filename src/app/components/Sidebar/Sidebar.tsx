'use client';

import classNames from 'classnames';
import styles from './Sidebar.module.css';
import SelectionCard from '../SelectionCard/SelectionCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/store';
import { resetPlayer } from '@/store/features/trackSlice';

const Sidebar = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const savedUsername = localStorage.getItem('user');
      if (!savedUsername) return;
      const user: unknown = JSON.parse(savedUsername);

      if (
        user !== null &&
        typeof user === 'object' &&
        'username' in user &&
        typeof user.username === 'string'
      ) {
        setUserName(user.username);
      }
    } catch (error) {
      setUserName(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

    dispatch(resetPlayer());
    setUserName(null);
    router.replace('/auth/signin');
  };

  return (
    <div className={classNames(styles.main__sidebar)}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>
          {userName ?? 'Посетитель'}
        </p>
        <button
          type="button"
          className={styles.sidebar__icon}
          aria-label="Выйти"
          title="Выйти"
          onClick={handleLogout}
        >
          <svg width={43} height={43} aria-hidden="true">
            <use href="/img/icon/sprite.svg#logout" />
          </svg>
        </button>
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
