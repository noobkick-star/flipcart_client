
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  getProducDetailsReducer,getProductReducer } from './reducers/productReducer';
import {cartReducer} from "./reducers/cartReducer.js"

const reducer = combineReducers({
    
    getProducts: getProductReducer ,
    getProductDetails : getProducDetailsReducer,
    cart : cartReducer
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;