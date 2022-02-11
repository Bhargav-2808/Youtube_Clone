import request from "../../api";
import { ChannelDFail, ChannelDRequet, ChannelDSuccess } from "../actionTypes";

export const getChannelDetails = (id) => async (dispatch)=>{
    try {
        dispatch({
            type:ChannelDRequet,
        })

        const {data} =await request('/channels',{
            params:{
                part:"snippet,statistics,contentDetails",
                id
            }
        })

        dispatch({
            type:ChannelDSuccess,
            payload:data.items[0],
        })

        
    } 
    catch(error) {
        console.log(error.response.data);
        dispatch({
            type:ChannelDFail,
            payload:error.response.data,
        })
    }
}