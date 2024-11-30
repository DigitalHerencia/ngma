import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Import slices here (example slice files would need to be created in src/store/slices)
import authReducer from './slices/authSlice';
import mediaReducer from './slices/mediaSlice';
import uiReducer from './slices/uiSlice';

// Configure the store
const store = configureStore({
  reducer: {
    auth: authReducer,
    media: mediaReducer,
    ui: uiReducer,
  },
});

// Type definitions for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
