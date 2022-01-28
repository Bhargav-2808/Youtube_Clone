import { useEffect } from "react";
import request from "../../api";
import "./Videopart.scss";
export const Videopart = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      publishedAt,
      localized:{
         title
      },
      channelTitle,
      thumbnails: { medium },
    },
  } = video;
  
 // const _videoId = id?.videoId || id
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      //console.log(data);
    };

    getVideoDetails();
  }, [id]);


  
  return (
    <>
      <div className="video">
        <div className="video__top">
          <img src={medium.url} alt="" />
          <span>05:43</span>
        </div>
        <div className="video__title">
          Create app in 5 minutes #made by Chintu
        </div>
        <div className="video__details">
          <span>5m Views •</span>
          <span>5 days ago</span>
        </div>
        <div className="video__channel">
          <img
            src="https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <p>Rainbow Hat Jr</p>
        </div>
      </div>
    </>
  );
};
