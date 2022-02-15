
import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReactShowMoreText from "react-show-more-text";
import "./VideoMetaData.scss";
import { useDispatch,useSelector } from "react-redux";
import { getChannelDetails,checkSubscription } from "../../redux/actions/channel.action";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId , channelTitle , description ,title,  publishedAt } = snippet;
  const {viewCount , likeCount , dislikeCount} = statistics;
  const dispatch = useDispatch();

  const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(state=>state.channelDetails.channel);
  const {subrcStatus}=useSelector(state=>state.channelDetails)

  console.log(subrcStatus);

  useEffect(()=>{
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscription(channelId))
  },[dispatch,channelId])

  //console.log(channelStatistics?.subscriberCount);
  return (
    <div className="videoMetaData py-2">

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
           
            <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
          </div>
        </div>
      
        <button className={`btn border-0 p-2 m-2 ${subrcStatus ? 'btn-gray': ''}`}>{subrcStatus?"Subscribed":"Subscribe"}</button>
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
