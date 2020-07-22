import userActionTypes from "./user.type";

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
  usersPosts: null,
  usersNotifications: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // actions for getting users posts
    case userActionTypes.FETCH_USER_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        usersPosts: action.payload,
      };
    case userActionTypes.FETCH_USER_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // creating a new post
    case userActionTypes.CREATE_NEW_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.CREATE_NEW_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case userActionTypes.CREATE_NEW_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // actions for getting users notifications
    default:
      return state;
  }
};

export default userReducer;
