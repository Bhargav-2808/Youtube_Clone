import { HomeVFail, HomeVRequest, HomeVSucess } from "../actionTypes";

const initialState={
    videos:[],
    loading:false,
    nextPageToken:null
}

export const videoReducer = (prestate=initialState,action) =>{
const {type, payload} = action;
    switch(type){
        case HomeVRequest: return{
            ...prestate,
            error:payload,
            loading:true
        }
        case HomeVSucess: return{
            ...prestate,
            videos:[...prestate.videos, ...payload.videos],
            loading:false,
            nextPageToken:payload.nextPageToken
        }
        case HomeVFail: return{
            ...prestate,
            
            loading:false,
            error:payload
        }
        
        default:return{...prestate}
    }
}