import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import dataChange from './reducers/dataReducer';

const store = createStore(dataChange, applyMiddleware(thunk));

export default store;
