import { Track } from '@/sharedTypes/sharedTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  currentTrack: Track | null;
  isPlaying: boolean;
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlaying: false,
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setCurrentTrack, setIsPlaying } = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
