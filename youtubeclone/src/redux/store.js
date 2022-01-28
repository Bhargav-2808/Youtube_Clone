import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer";
import { videoReducer } from "./reducers/videoReducer";

const reducer=combineReducers({
    auth:authReducer,
    homevideos:videoReducer
})

const store=createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;