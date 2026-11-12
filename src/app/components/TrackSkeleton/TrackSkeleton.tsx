import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './TrackSkeleton.module.css';

const TrackSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#444">
      <div className={styles.row} aria-hidden="true">
        <div className={styles.title}>
          <Skeleton width={51} height={51} containerClassName={styles.cover} />
          <div className={styles.name}>
            <Skeleton width="75%" height={16} />
          </div>
        </div>
        <div className={styles.author}>
          <Skeleton width="65%" height={16} />
        </div>

        <div className={styles.album}>
          <Skeleton width="70%" height={16} />
        </div>

        <div className={styles.duration}>
          <Skeleton width="100%" height={16} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default TrackSkeleton;
