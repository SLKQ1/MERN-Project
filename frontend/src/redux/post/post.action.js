import postActionTypes from "./post.type";
const axios = require("axios").default;

// action for fetching collection
export const fetchCollectionStart = () => {
  return {
    type: postActionTypes.FETCH_COLLECTION_START,
  };
};
// action for successful fetching
export const fetchCollectionSuccess = (wrist_shots) => {
  return {
    type: postActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: wrist_shots,
  };
};
// action for failure of fetch
export const fetchCollectionFailure = (error) => {
  return {
    type: postActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error,
  };
};
// async action for fetching collection
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    // dispatching fetch action
    dispatch(fetchCollectionStart());
    // async request
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        // dispatching success action
        dispatch(fetchCollectionSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        // dispatching error action
        dispatch(fetchCollectionFailure(err.message));
      });
  };
};

// action for fetching a post
export const fetchPostStart = () => {
  return {
    type: postActionTypes.FETCH_POST_START,
  };
};
// action for fetching a post success
export const fetchPostSuccess = (wrist_shot) => {
  return {
    type: postActionTypes.FETCH_POST_SUCCESS,
    payload: wrist_shot,
  };
};
// action for fetching post failure
export const fetchPostFailure = (error) => {
  return {
    type: postActionTypes.FETCH_POST_FAILURE,
    payload: error,
  };
};
// action to make async call to fetch post
export const fetchPostStartAsync = (wrist_shot_id) => {
  console.log(wrist_shot_id);
  return (dispatch) => {
    // dispatching fetching post action
    dispatch(fetchPostStart());
    // making api call to get post
    axios
      .get(`http://localhost:5000/posts/${wrist_shot_id}`)
      .then((res) => {
        // dispatching success action
        // console.log(res)
        dispatch(fetchPostSuccess(res));
      })
      .catch((error) => {
        // dispatching failure action
        dispatch(fetchPostFailure(error));
      });
  };
};

// action for creating a new post
export const createNewPost = (post) => {
  return {
    type: postActionTypes.CREATE_NEW_POST,
    payload: post,
  };
};
