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
export const fetchUserPostsStartAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchUserPostsStart());
    axios.get(`/posts`).then((posts) => {});
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
        // making an api call to add post to user
        // TODO make sure this is the right approach to what I am trying to do here
        axios
          .patch(`/users/${user._id}/addPost`, res)
          .then(() => {
            // dispatching success action
            dispatch(createNewPostSuccess(res));
          })
          .catch((error) => {
            dispatch(createNewPostFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(createNewPostFailure(error.message));
      });
  };
};
