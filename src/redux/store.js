import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './crypto_currency/crypto';

const store = configureStore({
  reducer: {
    cryptoData: cryptoSlice,
  },
});

export default store;
