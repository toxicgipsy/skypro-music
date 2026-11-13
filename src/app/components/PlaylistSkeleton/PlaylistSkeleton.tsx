import TrackSkeleton from '../TrackSkeleton/TrackSkeleton';
import styles from './PlaylistSkeleton.module.css';

const PlaylistSkeleton = () => {
  return (
    <div className={styles.list} role="status" aria-label="Загрузка треков">
      {Array.from({ length: 10 }, (_, index) => (
        <TrackSkeleton key={index} />
      ))}
    </div>
  );
};

export default PlaylistSkeleton;
