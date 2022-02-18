import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer";
import { ChannelDetailReducer } from "./reducers/channel.reducer";
import { CommentDetailReducer } from "./reducers/commentReducer";
<<<<<<< HEAD
import { videoReducer,SeletedVideoReducer,relatedVReducer, subscriptionChannelReducer } from "./reducers/videoReducer";
=======
import { videoReducer,SeletedVideoReducer,relatedVReducer,searchedVReducer } from "./reducers/videoReducer";
>>>>>>> 93ec24dda8adc0156f69056c3ccd87ca9769f689

const reducer=combineReducers({
    auth:authReducer,
    homevideos:videoReducer,
    selectedVideo:SeletedVideoReducer,
    channelDetails:ChannelDetailReducer,
    comment:CommentDetailReducer,
<<<<<<< HEAD
    relatedVideo:relatedVReducer,
    subscriptionChannel:subscriptionChannelReducer,
=======
    relatedVideo:relatedVReducer ,
    searchVideo:searchedVReducer
>>>>>>> 93ec24dda8adc0156f69056c3ccd87ca9769f689
})

const store=createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;