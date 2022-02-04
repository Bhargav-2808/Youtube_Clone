import React from 'react';
import "./WatchScreen.scss";
import { Col, Container, Row } from 'react-bootstrap';
import VideoMetaData from '../../Components/VideoMetaData/VideoMetaData';
import Comments from '../../Components/Comments/Comments';
import VideoHorizontal from '../../Components/VideoHorizontal/VideoHorizontal';

const WatchScreen = () => {
  return <Container className='watchScreen'>
      <Row>
          <Col lg={8}>
              <div className='watchScreen__player'>
                {/* <iframe 
                src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                width="100%"
                height="100%"
                title='My Video'
                frameBorder="0" 
                allowFullScreen ></iframe> */}
              </div>
              <VideoMetaData/>
              <Comments/>
          </Col>
          <Col lg={4}>

              {
                  [...Array(10)].map(()=>{
                      return <VideoHorizontal/>
                  })
              }
          </Col>
      </Row>
  </Container>
};

export default WatchScreen;
