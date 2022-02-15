import { ChannelDFail, ChannelDRequet, ChannelDSuccess, SubscriptionStatus } from "../actionTypes"

export const ChannelDetailReducer = (prestate = {
    loading:true,
    channel:{},
    SubscriptionStatus_:false
},action) =>{
const {type , payload} = action

    switch(type)
    {
        case ChannelDRequet:
            return{
                ...prestate,
                loading:true,
            }
        case ChannelDSuccess:
            return{
                ...prestate,
                channel:payload,
                loading:false,
            }
        case ChannelDFail:
            return{
                ...prestate,
                channel:null,
                error:payload,
                loading:true,
            }
        case SubscriptionStatus:
            return{
                ...prestate,
                SubscriptionStatus_:payload
            }
        default:
            return prestate
    }

}