import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import './HomeScreen.scss'

import { Videopart } from "../../Components/VideoPart/Videopart"
import { useDispatch, useSelector } from "react-redux"

import { getPopVideos } from "../../redux/actions/video.action"


const HomeScreen = () => {
   const dispatch = useDispatch();

   useEffect( ()=>{
    dispatch(getPopVideos())  
   },[dispatch])
   
   const {videos} = useSelector(state=>state.homevideos)
   // console.log(videos);
   return (
      <Container className="homeScreen">
         
         <Row>
            {videos.map(video=>(
               <Col lg={3} md={4} key={video.id}>
                  <Videopart video={video} />
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default HomeScreen