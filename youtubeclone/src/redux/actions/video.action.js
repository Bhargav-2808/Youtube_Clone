
import request from "../../api"
import { HomeVRequest,HomeVSucess ,HomeVFail} from "../actionTypes"

export const getPopVideos = () => async dispatch =>{
    try {
        dispatch({
            type:HomeVRequest,
        })

        const response = await request.get("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                pageToken: "",
                regionCode:"IN",
                maxResults:20
            },
        })
        const {data} = response;
        //console.log(response);
        //console.log(data);
        
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