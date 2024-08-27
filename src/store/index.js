import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducer/authReducer';
import collectionReducer from './reducer/collectionReducer';


const rootReducer = combineReducers({
    authReducer,
    collectionReducer
})

const middleware = [thunk];

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;