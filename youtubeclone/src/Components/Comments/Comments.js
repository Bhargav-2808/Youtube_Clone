import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentDetails } from '../../redux/actions/commentAction';
import Comment from '../Comment/Comment';
import "./Comments.scss";
const Comments = ({videoId}) => {

    const dispatch = useDispatch();
    const [text, setText] = useState("")

    const comments=useSelector(state=>state.comment.comment)
    const {user}=useSelector(state=>state.auth);

    const _comments=comments?.map(comment=>comment.snippet.topLevelComment.snippet)


    useEffect(()=>{
        dispatch(getCommentDetails(videoId))
    },[videoId,dispatch])

    const handelComment=(e)=>{
        e.preventDefault();

        if(text.length===0){
            return
        }
        dispatch(addComment(videoId,text))
        setText('');
    }
  return <div className='comments'>
      <p></p>
      <div className="comments__form d-flex w-100 my-2">
        <img src={user!=null?user.imgUrl:"https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"} 
            alt="" 
            className='rounded-circle me-3'
        />
        <form onSubmit={handelComment} className='d-flex flex-grow-1'>
            <input 
                type="text" 
                className='flex-grow-1'
                placeholder='Write a comment....'
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            <button className='p-2 border-0'>Comment</button>
        </form>
      </div>
      <div className='comments__list'>
            {_comments?.map((comment,i)=>{
                return <Comment comment={comment} key={i}/>
            })}
         </div>
  </div>;
};

export default Comments;
