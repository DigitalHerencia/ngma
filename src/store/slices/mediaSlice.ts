import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MediaState {
  mediaItems: string[];
  isLoading: boolean;
}

const initialState: MediaState = {
  mediaItems: [],
  isLoading: false,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMediaItems: (state, action: PayloadAction<string[]>) => {
      state.mediaItems = action.payload;
    },
    addMediaItem: (state, action: PayloadAction<string>) => {
      state.mediaItems.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMediaItems, addMediaItem, setLoading } = mediaSlice.actions;
export default mediaSlice.reducer;
