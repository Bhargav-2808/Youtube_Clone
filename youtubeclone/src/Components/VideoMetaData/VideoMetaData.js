import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReactShowMoreText from "react-show-more-text";
import "./VideoMetaData.scss";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails, subscrition } from "../../redux/actions/channel.action";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const dispatch = useDispatch();

  const { 
    snippet: channelSnippet,
    statistics: channelStatistics,
  } = useSelector((state) => state.channelDetails.channel);
  
  const SubscriptionStatus_ = useSelector(
    state => state.channelDetails.subscriptionStatus
 )
  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(subscrition(channelId))
  }, [dispatch, channelId]);

  //console.log(channelStatistics?.subscriberCount);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-2">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className="me-3">
              <ThumbUpIcon />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="me-3">
              <ThumbDownIcon />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers
            </span>
          </div>
        </div>
        <button className={`p-2 m-2 border-0 btn ${
                  SubscriptionStatus_ && 'btn-gray'
               }`}>{SubscriptionStatus_?"Subscribed":"Subscribe"}</button>
      </div>
      <div className="videoMetaData__description">
        <ReactShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
