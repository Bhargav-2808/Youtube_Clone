import { AddCommentFail, AddCommentSuccess, AddCommmentRequest, CommentFail, CommentSuccess, CommmentRequest } from "../actionTypes";
import request from "../../api";

export const getCommentDetails = (id) => async (dispatch)=>{
    try {
        dispatch({
            type:CommmentRequest,
        })

        const {data} =await request('/commentThreads',{
            params:{
                part:"snippet",
                videoId:id,
            }
        })

        dispatch({
            type:CommentSuccess,
            payload:data.items,
        })

        
    } 
    catch(error) {
        console.log(error.response.data);
        dispatch({
            type:CommentFail,
            payload:error.response.data.message,
        })
    }
}

export const addComment = (id,text) => async (dispatch,getState)=>{
    try {
        dispatch({
            type:AddCommmentRequest,
        })

        const comment={
            snippet:{
                videoId:id,
                topLevelComment:{
                    snippet:{
                        textOriginal:text,
                    }
                }
            }
        }

        await request.post('/commentThreads',comment,{
            params:{
                part:"snippet",
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
            }
        })

        dispatch({
            type:AddCommentSuccess,
        })

        setTimeout(()=>{
            dispatch(getCommentDetails(id))
            console.log("Dispatch");
        },4000)
    } 
    catch(error) {
        console.log(error.response.data);
        dispatch({
            type:AddCommentFail,
            payload:error.response.data.message,
        })
    }
}