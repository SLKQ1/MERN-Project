import postActionTypes from "./post.type";

const INITIAL_STATE = {
  wrist_shots: [],
  wrist_shot: null,
  isFetching: false,
  errorMessage: undefined,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // retrieving wrist shots
    case postActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case postActionTypes.FETCH_COLLECTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        wrist_shots: action.payload,
      };
    case postActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // retrieving a post
    case postActionTypes.FETCH_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case postActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        wrist_shot: action.payload,
      };
    case postActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // creating a new post
    case postActionTypes.CREATE_NEW_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case postActionTypes.CREATE_NEW_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case postActionTypes.CREATE_NEW_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // case postActionTypes.CREATE_NEW_POST:
    //   return {
    //     ...state,
    //     wrist_shots: state.wrist_shots.concat(action.payload),
    //   };
    default:
      return state;
  }
};

export default postReducer;
