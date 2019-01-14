import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import getDataReducer from './reducers/get-data-reducer';

export default createStore(
    combineReducers({
        data: getDataReducer ,
    }),
    applyMiddleware(promise,logger,thunk)
)