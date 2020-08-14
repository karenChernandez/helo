import postAisle from './postAisle';
import userAisle from './userAisle';
import middleware from 'redux-promise-middleware'
import {createStore, applyMiddleware, combineReducers} from 'redux';

const reducer = combineReducers({
    postAisle,
    userAisle
})

export default createStore(reducer, applyMiddleware(middleware))