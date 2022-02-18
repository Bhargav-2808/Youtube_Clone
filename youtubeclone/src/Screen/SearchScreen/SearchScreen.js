import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVBySearch } from "../../redux/actions/video.action";
import { Container ,Row,Col} from "react-bootstrap";
import VideoHorizontal from "../../Components/VideoHorizontal/VideoHorizontal";

function SearchScreen() {
  const query = useParams();
  const qu = query?.query;
  // console.log(query?.query);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVBySearch(qu));
  }, [dispatch, qu]);
  const { videos, loading } = useSelector((state) => state.searchVideo);
  return (
    <>
      <Container>
        <Row>
          {!loading ? (
            videos.map((video) => (
              <Col>
                <VideoHorizontal video={video} key={video.id.videoId} Search_screen/>
              </Col>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Row>
      </Container>
    </>
  );
}

export default SearchScreen;
