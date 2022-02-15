import request from "../../api";
import { ChannelDFail, ChannelDRequet, ChannelDSuccess, SubscriptionStatus } from "../actionTypes";

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


export const checkSubscription = (id) => async (dispatch,getState)=>{
    try {

        const {data} =await request('/subscriptions',{
            params:{
                part:"snippet",
                forChannelId:id,
                mine:true,
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
            }
        })

        dispatch({
            type:SubscriptionStatus,
            payload:data.items.length !== 0,
        })
        console.log(data.items.length);

    } 
    catch(error) {
        console.log(error.response.data);
    }
} 