import axios from 'axios'


const request = axios.create(
   
    {
        baseURL : "https://youtube.googleapis.com/youtube/v3/",
        params :{
         key:"AIzaSyBIPkCs93I1ueLXg7RPZr_Y_rrvP4MgQK0",   
        }
    }
    )
    

export default request;