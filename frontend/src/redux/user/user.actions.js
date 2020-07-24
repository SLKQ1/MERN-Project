import userActionTypes from "./user.type";
const axios = require("axios").default;

// actions for fetching users posts
export const fetchUserPostsStart = () => {
  return {
    type: userActionTypes.FETCH_USER_POSTS_START,
  };
};
export const fetchUserPostsSuccess = (posts) => {
  return {
    type: userActionTypes.FETCH_USER_POSTS_SUCCESS,
    payload: posts,
  };
};
export const fetchUserPostsFailure = (error) => {
  return {
    type: userActionTypes.FETCH_USER_POSTS_FAILURE,
    payload: error,
  };
};
export const fetchUserPostsStartAsync = (username) => {
  return (dispatch) => {
    dispatch(fetchUserPostsStart());
    axios
      .get(`/posts/userPosts/${username}`)
      .then((posts) => {
        dispatch(fetchUserPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchUserPostsFailure(error.message));
      });
  };
};

// action for creating a new post by user
export const createNewPostStart = () => {
  return {
    type: userActionTypes.CREATE_NEW_POST_START,
  };
};

export const createNewPostSuccess = (post) => {
  return {
    type: userActionTypes.CREATE_NEW_POST_SUCCESS,
    payload: post,
  };
};

export const createNewPostFailure = (error) => {
  return {
    type: userActionTypes.CREATE_NEW_POST_FAILURE,
    payload: error,
  };
};

export const createNewPostStartAsync = (user, post) => {
  return (dispatch) => {
    // dispatching creating post action
    dispatch(createNewPostStart());
    // making api call to create post
    axios
      .post("/posts/add", post)
      .then((res) => {
        dispatch(createNewPostSuccess(res));
      })
      .catch((error) => {
        dispatch(createNewPostFailure(error.message));
      });
  };
};

// action for user liking a post
export const voteOnPostStart = () => {
  return {
    type: userActionTypes.VOTE_ON_POST_START,
  };
};
export const voteOnPostSuccess = () => {
  return {
    type: userActionTypes.VOTE_ON_POST_SUCCESS,
  };
};
export const voteOnPostFailure = (error) => {
  return {
    type: userActionTypes.VOTE_ON_POST_FAILURE,
    payload: error.message,
  };
};
// async call to like a post
export const voteOnPostStartAsync = (postID, userID) => {
  return (dispatch) => {
    dispatch(voteOnPostStart());
    axios
      .patch(`/posts/vote/${postID}`, userID)
      .then((post) => {
        dispatch(voteOnPostSuccess());
      })
      .catch((error) => {
        dispatch(voteOnPostFailure(error));
      });
  };
};

// actions for commenting on a post
export const commentOnPostStart = () => {
  return {
    type: userActionTypes.COMMENT_ON_POST_START,
  };
};
export const commentOnPostSuccess = (comment) => {
  return {
    type: userActionTypes.COMMENT_ON_POST_SUCCESS,
    payload: comment,
  };
};
export const commentOnPostFailure = (error) => {
  return {
    type: userActionTypes.COMMENT_ON_POST_FAILURE,
    payload: error,
  };
};
// async call to post a comment
export const commentOnPostStartAsync = (comment, postID) => {
  console.log(comment);
  console.log(postID);
  return (dispatch) => {
    dispatch(commentOnPostStart());
    axios
      .post("/comments/add", comment)
      .then((comment) => {
        const commentObj = { comment: comment.data._id };
        // adding the new comment to the post
        axios
          .patch(`/posts/comment/${postID}`, commentObj)
          .then(() => {
            dispatch(commentOnPostSuccess(comment));
          })
          .catch((error) => {
            dispatch(commentOnPostFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(commentOnPostFailure(error.message));
      });
  };
};
