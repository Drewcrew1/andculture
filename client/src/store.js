import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initState = {};

const midddleware = [thunk];

const store = createStore(rootReducer,initState, applyMiddleware(...midddleware));

export default store;
