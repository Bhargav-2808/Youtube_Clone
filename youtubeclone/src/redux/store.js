import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer";
import { ChannelDetailReducer } from "./reducers/channel.reducer";
import { CommentDetailReducer } from "./reducers/commentReducer";
import { videoReducer,SeletedVideoReducer,relatedVReducer } from "./reducers/videoReducer";

const reducer=combineReducers({
    auth:authReducer,
    homevideos:videoReducer,
    selectedVideo:SeletedVideoReducer,
    channelDetails:ChannelDetailReducer,
    comment:CommentDetailReducer,
    relatedVideo:relatedVReducer 
})

const store=createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;