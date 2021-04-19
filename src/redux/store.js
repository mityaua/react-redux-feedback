import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import feedbackReducer from './feedback/feedback-reducer';

const persistConfig = {
  key: 'feedback',
  storage: sessionStorage,
};

// Создает хранилище + корневой редюсер + тулзами только для разработки
const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
