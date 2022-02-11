import React, { useEffect } from "react";
import "./WatchScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import VideoMetaData from "../../Components/VideoMetaData/VideoMetaData";
import Comments from "../../Components/Comments/Comments";
import VideoHorizontal from "../../Components/VideoHorizontal/VideoHorizontal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoByID } from "../../redux/actions/video.action";

const WatchScreen = () => {
  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoByID(id));
  }, [dispatch, id]);

  const { video , loading} = useSelector(state=>state.selectedVideo)
  return (
    <Container className="watchScreen">
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              width="100%"
              height="100%"
              title={video?.snippt?.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
 {
     !loading ? <VideoMetaData  video={video} videoId={id}/>:<h1>Loading..</h1>
 }
          
          <Comments />
        </Col>
        <Col lg={4}>
          {[...Array(10)].map(() => {
            return <VideoHorizontal />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default WatchScreen;
