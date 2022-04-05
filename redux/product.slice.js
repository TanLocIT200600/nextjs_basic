import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    dispatchProducts: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const productReducer = productsSlice.reducer;

export const { dispatchProducts } = productsSlice.actions;