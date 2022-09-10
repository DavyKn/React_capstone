import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from './Api';

const initialState = {
  coins: [],
  info: {},
  lifecycle: { loading: 'initial' },
};

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await Api.get('?start=0&limit=20');
  return response.data;
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.fulfilled, (state, action) => ({
        lifecycle: { loading: 'initial' },
        coins: action.payload.data,
        info: action.payload.info,
      }))
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        lifecycle: { loading: 'pending' },
      }))
      .addCase(fetchCoins.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

export default coinsSlice.reducer;
