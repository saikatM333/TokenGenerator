// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

const store = configureStore({
  reducer: {
    tokens: tokenReducer
  }
});

export default store;
