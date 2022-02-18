import axios from 'axios'


const key2 ="AIzaSyCaxslLA0uRrbAdN_ePMl1OcU0LyUGovRs";
const key1 = "AIzaSyBIPkCs93I1ueLXg7RPZr_Y_rrvP4MgQK0"
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