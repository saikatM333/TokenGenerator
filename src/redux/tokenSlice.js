// src/redux/tokenSlice.js
import { createSlice } from '@reduxjs/toolkit';
import TokenService from '../services/TokenServices';

const initialState = {
  blueTokens: [],
  redTokens: []
};

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    generateTokens: (state, action) => {
      const { blueCount, bluePrefix, bluePerRow, redCount, redPrefix, redPerRow } = action.payload;
      state.blueTokens = TokenService.generateTokens(blueCount, bluePrefix, bluePerRow);
      state.redTokens = TokenService.generateTokens(redCount, redPrefix, redPerRow);
    },
    clearTokens: (state) => {
      state.blueTokens = [];
      state.redTokens = [];
    }
  }
});

export const { generateTokens, clearTokens } = tokenSlice.actions;
export default tokenSlice.reducer;
