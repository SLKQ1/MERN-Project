import userActionTypes from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  authError: null,
  isFetching: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // actions for sign in
    case userActionTypes.SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        authError: action.payload,
        isFetching: false,
      };

    // actions for sign up
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
      };
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
