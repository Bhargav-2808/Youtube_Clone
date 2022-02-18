import axios from 'axios'


const request = axios.create(
   
    {
        baseURL : "https://youtube.googleapis.com/youtube/v3/",
        params :{
        //  key:"AIzaSyBIPkCs93I1ueLXg7RPZr_Y_rrvP4MgQK0",   
         key:"AIzaSyCaxslLA0uRrbAdN_ePMl1OcU0LyUGovRs",   
        }
    }
    )
    

export default request;