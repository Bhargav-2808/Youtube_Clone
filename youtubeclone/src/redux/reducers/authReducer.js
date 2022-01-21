import { LoadProfile, LoginFailed, LoginRequest, LoginSuccess } from "../actionTypes";

const initialState={
    accessToken:null,
    user:null,
    loading:false
}

export const authReducer = (preState=initialState,action)=>{
    const {type,payLoad}=action;

    switch (type) {
        case LoginRequest:
        return{
            ...preState,
            loading:true
        }

        case LoginSuccess:
            return{
                ...preState,
                accessToken:payLoad,
                loading:false
            }

        case LoginFailed:
            return{
                ...preState,
                accessToken:null,
                error:payLoad,
                loading:false
            }

        case LoadProfile:
            return{
                ...preState,
                user:payLoad,
                loading:false
            }
    
        default:
            return preState;
    }
}