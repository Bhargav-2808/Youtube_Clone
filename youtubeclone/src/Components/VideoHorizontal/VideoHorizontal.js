import React, { useEffect, useState } from "react";
import "./VideoHorizontal.scss";
import RemoveRedEyeIcon from "@mui/icons-material/Visibility";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      title,
      description,
      publishedAt,
      channelTitle,
      thumbnails:{medium},
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setchannelIcon] = useState(null);



  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data:{items}
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0]?.contentDetails?.duration)
      setViews(items[0]?.statistics?.viewCount)
    };

    getVideoDetails();
  }, [id]);
  
  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data:{items}
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      
      setchannelIcon(items[0].snippet.thumbnails.default.url)
     // console.log(items);
    };

    getChannelIcon();
  }, [channelId]);

  const secs = moment.duration(duration).asSeconds();
  const _duration = moment.utc(secs * 1000).format("mm:ss");
  const nav= useNavigate()

  const handleclick = () =>{
        nav(`/watch/${id.videoId}`)
  }

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center" onClick={handleclick}>
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal__details">
          <RemoveRedEyeIcon fontSize="small" />
          {numeral(views).format("0.a")} Views •
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage 
                        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                        effect="blur"
                    /> */}
          <p className="mb-0"> {channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
