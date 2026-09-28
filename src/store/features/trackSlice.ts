import { Track } from '@/sharedTypes/sharedTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  playlist: Track[];
  isShuffle: boolean;
  shuffledPlaylist: Track[];
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  isShuffle: false,
  shuffledPlaylist: [],
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<Track[]>) => {
      state.playlist = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    toggleShuffle: (state) => {
      if (!state.isShuffle) {
        const currentTrack = state.currentTrack;

        const remainingTracks = state.playlist.filter(
          (track) => track._id !== currentTrack?._id,
        );

        remainingTracks.sort(() => Math.random() - 0.5);

        state.shuffledPlaylist = currentTrack
          ? [currentTrack, ...remainingTracks]
          : remainingTracks;
      }
      state.isShuffle = !state.isShuffle;
    },
    setNextTrack: (state) => {
      const activePlaylist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;

      if (!state.currentTrack || activePlaylist.length === 0) {
        return;
      }

      const currentIndex = activePlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id,
      );

      if (currentIndex === -1) {
        state.isPlaying = false;
        return;
      }

      const nextTrack = activePlaylist[currentIndex + 1];
      if (!nextTrack) {
        state.isPlaying = false;
        return;
      }

      state.currentTrack = nextTrack;
      state.isPlaying = true;
    },
    setPreviousTrack: (state) => {
      const activePlaylist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;

      if (!state.currentTrack || activePlaylist.length === 0) {
        return;
      }

      const currentIndex = activePlaylist.findIndex(
        (track) => track._id === state.currentTrack?._id,
      );

      if (currentIndex <= 0) {
        return;
      }

      const previousTrack = activePlaylist[currentIndex - 1];
      if (!previousTrack) {
        return;
      }

      state.currentTrack = previousTrack;
      state.isPlaying = true;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setCurrentPlaylist,
  setNextTrack,
  toggleShuffle,
  setPreviousTrack,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
