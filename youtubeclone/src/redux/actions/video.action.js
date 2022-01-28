import request from "../../api"
import { HomeVRequest } from "../actionTypes"

export const getPopVideos = () => async dispatch =>{
    try {
        dispatch({
            type:HomeVRequest,
        })

        const respnse = request.get("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                pageToken: "",
                regionCode:"IN",
                maxResults:20
            },
        })
        console.log(respnse)
    } catch (error) {
        
    }
}