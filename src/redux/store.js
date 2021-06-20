import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import employeesDataReducer from './reducers/employeesDataReducer';

const reducer = combineReducers({ employeesDataReducer });

const store = createStore(reducer , applyMiddleware(thunk));
window.store = store;
export default store;