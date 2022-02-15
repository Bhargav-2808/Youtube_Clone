import request from "../../api";
<<<<<<< HEAD
import { ChannelDFail, ChannelDRequet, ChannelDSuccess, SubscriptionStatus } from "../actionTypes";
=======
import { ChannelDFail, ChannelDRequet, ChannelDSuccess,SubscriptionStatus } from "../actionTypes";
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526

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

<<<<<<< HEAD

export const subscrition = (id) => async (dispatch,getState) =>{
    try {
     
=======
export const checkSubscription = (id) => async (dispatch,getState)=>{
    try {
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526

        const {data} =await request('/subscriptions',{
            params:{
                part:"snippet",
                forChannelId:id,
<<<<<<< HEAD
                mine:true
            },
            headers:{
                Authorization :`Bearer ${getState().auth.token}`,
=======
                mine:true,
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526
            }
        })

        dispatch({
            type:SubscriptionStatus,
<<<<<<< HEAD
            payload:data.items.length!==0,
            
        })
        console.log(getState().auth.token)

=======
            payload:data.items.length !== 0,
        })
        console.log(data.items.length);
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526
        
    } 
    catch(error) {
        console.log(error.response.data);
<<<<<<< HEAD
        
=======
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526
    }
}