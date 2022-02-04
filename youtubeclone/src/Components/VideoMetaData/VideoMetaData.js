import React from 'react';
import moment from "moment";
import numeral from "numeral";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReactShowMoreText from 'react-show-more-text';
import "./VideoMetaData.scss";

const VideoMetaData = () => {
  return <div className='videoMetaData py-2'>
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <span>
                        {numeral(10000).format('0.a')} Views •
                        {moment('2022-02-04').fromNow()}
                    </span>
                    <div>
                        <span className='me-3'>
                            <ThumbUpIcon />
                            {numeral(10000).format('0.a')}
                        </span>
                        <span className='me-3'>
                            <ThumbDownIcon />
                            {numeral(10000).format('0.a')}
                        </span>       
                    </div>
                </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                    alt="" 
                    className='roundedCircle me-3'/>
                    <div className="d-flex flex-column">
                        <span>Channel Name</span>
                        <span>{numeral(10000).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">Subscribe</button>
            </div>
            <div className="videoMetaData__description">
                <ReactShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum alias aspernatur porro, fugit cum impedit vitae tenetur minus perspiciatis. 
                    Ullam dicta sapiente quidem obcaecati laborum pariatur? 
                    Quibusdam odio voluptatem provident eveniet aperiam, quam necessitatibus quidem voluptates, 
                    numquam quae recusandae culpa sed rerum! 
                    Quod recusandae pariatur eaque, animi id nemo asperiores.
                    Quibusdam odio voluptatem provident eveniet aperiam, quam necessitatibus quidem voluptates, 
                    numquam quae recusandae culpa sed rerum! 
                    Quod recusandae pariatur eaque, animi id nemo asperiores.
                    Quibusdam odio voluptatem provident eveniet aperiam, quam necessitatibus quidem voluptates, 
                    numquam quae recusandae culpa sed rerum! 
                    Quod recusandae pariatur eaque, animi id nemo asperiores.
                </ReactShowMoreText>
            </div>
  </div>;
};

export default VideoMetaData;
