import { ChannelDFail, ChannelDRequet, ChannelDSuccess } from "../actionTypes"

export const ChannelDetailReducer = (prestate = {
    loading:true,
    channel:{}
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
        default:
            return prestate
    }

}