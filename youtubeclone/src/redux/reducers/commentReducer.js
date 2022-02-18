import { CommentFail, CommentSuccess, CommmentRequest } from "../actionTypes";

export const CommentDetailReducer = (
    prestate = {
      loading: true,
      comment:null,
    },
    action
  ) => {
    const { type, payload } = action;
  
    switch (type) {
      case CommmentRequest:
        return {
          ...prestate,
          loading: true,
        };
      case CommentSuccess:
        return {
          ...prestate,
          comment: payload,
          loading: false,
        };
      case CommentFail:
        return {
          ...prestate,
          error: payload,
          loading: true,
        };
      default:
        return prestate;
    }
  };