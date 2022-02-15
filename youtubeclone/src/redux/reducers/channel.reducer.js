<<<<<<< HEAD
import { ChannelDFail, ChannelDRequet, ChannelDSuccess, SubscriptionStatus } from "../actionTypes"
=======
import { ChannelDFail, ChannelDRequet, ChannelDSuccess,SubscriptionStatus } from "../actionTypes"
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526

export const ChannelDetailReducer = (prestate = {
    loading:true,
    channel:{},
<<<<<<< HEAD
    SubscriptionStatus_:false
=======
    subrcStatus:false
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526
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
<<<<<<< HEAD
                SubscriptionStatus_:payload
=======
                subrcStatus:payload,
>>>>>>> f5bd7205aef44c493986e41eb295d1f53add9526
            }
        default:
            return prestate
    }

}