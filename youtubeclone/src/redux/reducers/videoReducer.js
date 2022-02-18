import { HomeVFail, HomeVRequest, HomeVSucess, RelatedVFail, RelatedVRequst, RelatedVSuccess, SeletedVFail, SeletedVRequest, SeletedVSuccess, SubscriptonChannelFail, SubscriptonChannelRequest, SubscriptonChannelSuccess } from "../actionTypes";

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
        case RelatedVFail:
            return{
                ...prestate,
                error:payload,
                loading:true,
            }
        default:
            return prestate
    }

}

export const subscriptionChannelReducer = (prestate = {
    loading:true,
    videos:[]
},action) =>{
const {type , payload} = action

    switch(type)
    {
        case SubscriptonChannelRequest:
            return{
                ...prestate,
                loading:true,
            }
        case SubscriptonChannelSuccess:
            return{
                ...prestate,
                videos:payload,
                loading:false,
            }
        case SubscriptonChannelFail:
            return{
                ...prestate,
                error:payload,
                loading:true,
            }
        default:
            return prestate
    }

}

export const searchedVReducer = (
    state = {
       loading: true,
       videos: [],
    },
    action
 ) => {
    const { payload, type } = action
 
    switch (type) {
       case SearchVRequst:
          return {
             ...state,
             loading: true,
          }
       case SearchVSuccess:
          return {
             ...state,
             videos: payload,
             loading: false,
          }
       case SearchdVFail:
          return {
             ...state,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }