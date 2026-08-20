import styles from './Playlist.module.css';
import { PlaylistProps } from '@/sharedTypes/sharedTypes';
import Track from '../Track/Track';

const Playlist = ({ tracks }: PlaylistProps) => {
  return (
    <div className={styles.content__playlist}>
      {tracks.map((track) => (
        <Track track={track} key={track._id} />
      ))}
    </div>
  );
};

export default Playlist;
