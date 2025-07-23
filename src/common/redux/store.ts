import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  counter: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setUpStore = (preloadedState?: RootState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState
  });

export const store = setUpStore();