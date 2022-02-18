import request from "../../api"
<<<<<<< HEAD
import { HomeVRequest,HomeVSucess ,HomeVFail, SeletedVRequest, SeletedVSuccess, SeletedVFail, RelatedVRequst, RelatedVSuccess, RelatedVFail, SubscriptonChannelSuccess, SubscriptonChannelRequest, SubscriptonChannelFail, SearchVRequst, SearchVSuccess, SearchdVFail} from "../actionTypes"
=======

import { HomeVRequest,HomeVSucess ,HomeVFail, SeletedVRequest, SeletedVSuccess, SeletedVFail, RelatedVRequst, RelatedVSuccess, RelatedVFail, SearchVRequst, SearchVSuccess, SearchdVFail, SubscriptonChannelSuccess, SubscriptonChannelRequest, SubscriptonChannelFail} from "../actionTypes"

>>>>>>> 3bfd21214abbb2f94298ed3bc51a4b243a41b48e

export const getPopVideos = () => async (dispatch,getState) =>{
    try {
        dispatch({
            type:HomeVRequest,
        })

        const response = await request.get("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                pageToken: getState().homevideos.nextPageToken,
                regionCode:"IN",
                maxResults:20
            },
        })
        const {data} = response;
        
        dispatch({
            type:HomeVSucess,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
            }
        })
    } catch (error) {
        console.log(error.message);

        dispatch({
            type:HomeVFail,
            payload:error.message
        })
        
    }
}

export const getVideoByID = (id) => async (dispatch)=>{
    try {
        dispatch({
            type:SeletedVRequest,
        })

        const {data} =await request('/videos',{
            params:{
                part:"snippet,statistics",
                id:id,
            }
        })

        dispatch({
            type:SeletedVSuccess,
            payload:data.items[0],
        })

        
    } 
    catch(error) {
        console.log(error.message);
        dispatch({
            type:SeletedVFail,
            payload:error.message,
        })
    }
}

export const getRVideo = (id) => async (dispatch)=>{
    try {
        dispatch({
            type:RelatedVRequst,
        })

        const {data} =await request('/search',{
            params:{
                part:"snippet",
                relatedToVideoId:id,
                maxResults:15,
                type:"video"
            }
        })

        dispatch({
            type:RelatedVSuccess,
            payload:data.items,
        })
        
    } 
    catch(error) {
        console.log(error.message);
        dispatch({
            type:RelatedVFail,
            payload:error.message,
        })
    }
}

<<<<<<< HEAD
=======

>>>>>>> 3bfd21214abbb2f94298ed3bc51a4b243a41b48e
export const getSubscriptionVideo = () => async (dispatch,getState)=>{
    try {

        dispatch({
            type:SubscriptonChannelRequest,
        })

        const {data} =await request('/subscriptions',{
            params:{
                part:"snippet,contentDetails",
                mine:true,
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
            }
        })

        dispatch({
            type:SubscriptonChannelSuccess,
            payload:data.items,
        })

    } 
    catch(error) {
        dispatch({
            type:SubscriptonChannelFail,
            payload:error.response.data,
        })
        console.log(error.response.data);
    }
}
<<<<<<< HEAD
=======

>>>>>>> 3bfd21214abbb2f94298ed3bc51a4b243a41b48e

export const getVBySearch = keyword => async dispatch => {
    try {
       dispatch({
          type: SearchVRequst,
       })
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             maxResults: 20,
             q: keyword,
             type: 'video,channel',
          },
       })
 
       dispatch({
          type: SearchVSuccess,
          payload: data.items,
       })

    } catch (error) {
       console.log(error.message)
       dispatch({
          type: SearchdVFail,
          payload: error.message,
       })
    }
 }
<<<<<<< HEAD
=======

>>>>>>> 3bfd21214abbb2f94298ed3bc51a4b243a41b48e
