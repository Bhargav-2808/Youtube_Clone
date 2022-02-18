import { HomeVFail, HomeVRequest, HomeVSucess, RelatedVRequst, RelatedVSuccess, SeletedVFail, SeletedVRequest, SeletedVSuccess } from "../actionTypes";

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

export const SeletedVideoReducer = (prestate = {
    loading:true,
    video:null
},action) =>{
const {type , payload} = action

    switch(type)
    {
        case SeletedVRequest:
            return{
                ...prestate,
                loading:true,
            }
        case SeletedVSuccess:
            return{
                ...prestate,
                video:payload,
                loading:false,
            }
        case SeletedVFail:
            return{
                ...prestate,
                video:null,
                error:payload,
                loading:true,
            }
        default:
            return prestate
    }

}

export const relatedVReducer = (prestate = {
    loading:true,
    videos:[]
},action) =>{
const {type , payload} = action

    switch(type)
    {
        case RelatedVRequst:
            return{
                ...prestate,
                loading:true,
            }
        case RelatedVSuccess:
            return{
                ...prestate,
                videos:payload,
                loading:false,
            }
        case RelatedVSuccess:
            return{
                ...prestate,
                error:payload,
                loading:true,
            }
        default:
            return prestate
    }

}