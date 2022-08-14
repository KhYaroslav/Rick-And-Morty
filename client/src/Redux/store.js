import { configureStore } from '@reduxjs/toolkit';
import apiReducers from './reducers/apiReducers';

const store = configureStore({
  reducer: {
    api: apiReducers,
  },
});

export default store;
