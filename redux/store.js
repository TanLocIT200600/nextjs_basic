import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { productReducer } from './product.slice';

const reducer = {
  cart: cartReducer,
  product: productReducer,
};

const store = configureStore({
  reducer,
});

export default store;