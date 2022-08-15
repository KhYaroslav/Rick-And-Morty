import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import apiReducers from './reducers/apiReducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    api: apiReducers,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
