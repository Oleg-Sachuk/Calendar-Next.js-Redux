import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import popupReducer from './popup-reducer';


let reducers = combineReducers({
    popup: popupReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;