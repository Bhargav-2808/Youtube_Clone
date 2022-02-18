import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import VideoHorizontal from '../../Components/VideoHorizontal/VideoHorizontal';
import { getSubscriptionVideo } from '../../redux/actions/video.action';
import "./SubscriptionScreen.scss";

const SubscriptionScreen = () => {

    const dispatch = useDispatch();
    const {loading,videos}=useSelector(state=>state.subscriptionChannel)

    useEffect(()=>{
        dispatch(getSubscriptionVideo())
    },[dispatch])

    return (
        <Container className="subsScreen">
            {!loading ? (
            videos?.map(video => (
               <VideoHorizontal video={video} key={video.id} Subcription_Screen/>
            ))
            ) : (<h3>Loading....</h3>)}
        </Container>
    )
}

export default SubscriptionScreen
