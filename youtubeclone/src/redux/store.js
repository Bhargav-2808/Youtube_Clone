import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer";
import { ChannelDetailReducer } from "./reducers/channel.reducer";
import { CommentDetailReducer } from "./reducers/commentReducer";
import { videoReducer,SeletedVideoReducer,relatedVReducer,searchedVReducer } from "./reducers/videoReducer";

const reducer=combineReducers({
    auth:authReducer,
    homevideos:videoReducer,
    selectedVideo:SeletedVideoReducer,
    channelDetails:ChannelDetailReducer,
    comment:CommentDetailReducer,
    relatedVideo:relatedVReducer ,
    searchVideo:searchedVReducer
})

const store=createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;