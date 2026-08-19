export type Track = {
  _id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: number[];
};

export type FilterProps = {
  tracks: Track[];
};

export type PlaylistProps = {
  tracks: Track[];
};

export type TrackProps = {
  track: Track;
};

export type FilterKey = 'author' | 'genre';

export type FilterName = 'author' | 'year' | 'genre';

export type FilterItemProps = {
  title: string;
  onClick: () => void;
  activeFilter: FilterName | null;
  nameFilter: FilterName;
  options: string[];
};
