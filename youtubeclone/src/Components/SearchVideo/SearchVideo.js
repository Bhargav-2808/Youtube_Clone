import React, { useEffect, useState } from "react";
import "./searchvideo.scss";
import RemoveRedEyeIcon from "@mui/icons-material/Visibility";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchVideo = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0]?.contentDetails?.duration);
      setViews(items[0]?.statistics?.viewCount);
    };

    getVideoDetails();
  }, [id]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });

      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    getChannelIcon();
  }, [channelId]);

  const secs = moment.duration(duration).asSeconds();
  const _duration = moment.utc(secs * 1000).format("mm:ss");
  const nav = useNavigate();

  const _channelId = resourceId?.channelId || channelId;

  const handleClick = () => {
    nav(`/watch/${id.videoId}`);
  };

  return (
    <>
        <div className="searchvideo" onClick={handleClick}>
        <div className="searchvideo__top">
          <LazyLoadImage src={medium.url} effect="blur" />
          {/* <img src={medium.url} alt="" /> */}
          <span className="searchvideo__top__duration">{_duration}</span>
        </div>
        <div className="searchvideo__title">{title}</div>
        <div className="searchvideo__details">
          <span>
            <RemoveRedEyeIcon fontSize="small" />
            {numeral(views).format("0.a")} Views •
          </span>
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
        <div className="searchvideo__channel">
          <LazyLoadImage src={channelIcon?.url} effect="blur" />
          {/* <img src={channelIcon}/> */}
          <p>{channelTitle}</p>
        </div>
        </div>
    </>
    // <Row
    //   className="py-2 m-1  align-items-center"
    //   onClick={handleClick}
    // >
    //   {/* //TODO refractor grid */}
    //   <Col xs={6} md={6} className="videoHorizontal__left">
    //     <LazyLoadImage
    //       src={medium.url}
    //       effect="blur"
    //       className={`videoHorizontal__thumbnail `}
    //       wrapperClassName="videoHorizontal__thumbnail-wrapper"
    //     />

    //     <span className="videoHorizontal__duration">{_duration}</span>
    //   </Col>
    //   <Col xs={6} md={4} className="p-0 videoHorizontal__right">
    //     <p className="mb-1 videoHorizontal__title">{title}</p>

    //     <div className="videoHorizontal__details">
    //       <RemoveRedEyeIcon /> {numeral(views).format("0.a")} Views •
    //       {moment(publishedAt).fromNow()}
    //     </div>

    //     <p className="mt-1 videoHorizontal__desc">{description}</p>

    //     <div className="my-1 videoHorizontal__channel d-flex align-items-center">
    //       <LazyLoadImage src={channelIcon?.url} effect="blur" />
    //       <p className="mb-0">{channelTitle}</p>
    //     </div>

    //   </Col>
    // </Row>
  );
};

export default SearchVideo;
