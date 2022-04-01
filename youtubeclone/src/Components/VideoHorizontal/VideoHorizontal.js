import React, { useEffect, useState } from "react";
import "./VideoHorizontal.scss";
import RemoveRedEyeIcon from "@mui/icons-material/Visibility";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video, Subcription_Screen }) => {
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

  const isVideo = !(id.kind === "youtube#channel" || Subcription_Screen);

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

    if (isVideo) getVideoDetails();
  }, [id, isVideo]);

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
    isVideo ? nav(`/watch/${id.videoId}`) : nav(`/channel/${_channelId}`);
  };
  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";
  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      {/* //TODO refractor grid */}
      <Col
        xs={6}
        md={Subcription_Screen ? 4 : 6}
        className="videoHorizontal__left"
      >
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail} `}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={Subcription_Screen ? 8 : 6}
        className="p-0 videoHorizontal__right"
      >
        <p className="mb-1 videoHorizontal__title">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            <RemoveRedEyeIcon /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {Subcription_Screen && (
          <p className="mt-1 videoHorizontal__desc">{description}</p>
        )}

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {Subcription_Screen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
        )}
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
