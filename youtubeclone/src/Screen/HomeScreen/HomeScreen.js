import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeScreen.scss";
import InfinteScroll from "react-infinite-scroll-component";
import { Videopart } from "../../Components/VideoPart/Videopart";
import { useDispatch, useSelector } from "react-redux";

import { getPopVideos } from "../../redux/actions/video.action";
import Skeleton from "react-loading-skeleton";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopVideos());
  }, [dispatch]);

  const { videos, loading } = useSelector((state) => state.homevideos);

  const fData = () => {
    dispatch(getPopVideos());
  };
  // console.log(videos);
  return (
    <Container className="homeScreen">
      <InfinteScroll
        dataLength={videos.length}
        next={fData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4} key={video.id}>
              <Videopart video={video} />
            </Col>
          ))}
        </Row>
      </InfinteScroll>
    </Container>
  );
};

export default HomeScreen;
