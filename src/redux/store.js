import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './rootSaga';
import rootReducer from  './rootReducer';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducer,
    middleware : [sagaMiddleWare]
});
sagaMiddleWare.run(rootSaga);
export default store;