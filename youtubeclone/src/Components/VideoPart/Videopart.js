import { useEffect,useState } from "react";
import request from "../../api";
import "./Videopart.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Videopart = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      localized:{
         title
      },
      thumbnails: { medium },
    },
  } = video;
  
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setchannelIcon] = useState(null);

  const secs=moment.duration(duration).asSeconds()  
  const _duration=moment.utc(secs*1000).format("mm:ss")

 // const _videoId = id?.videoId || id
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data:{items}
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
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


  
  return (
    <>
      <div className="video">
        <div className="video__top">
         <LazyLoadImage src={medium.url} effect="blur"/>
          {/* <img src={medium.url} alt="" /> */}
          <span className='video__top__duration'>{_duration}</span>
        </div>
        <div className="video__title">
          {title}
        </div>
        <div className="video__details">
          <span>{numeral(views).format('0.a')} Views •</span>
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
        <div className="video__channel">
        <LazyLoadImage src={channelIcon} effect="blur"/>
        {/* <img src={channelIcon}/> */}
          <p>{channelTitle}</p>
        </div>
      </div>
    </>
  );
};
