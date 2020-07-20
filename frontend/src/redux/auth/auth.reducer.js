import authActionTypes from "./auth.type";

const INITIAL_STATE = {
  currentUser: null,
  authError: null,
  isFetching: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // actions for sign in
    case authActionTypes.SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
      };
    case authActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
      };
    case authActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        authError: action.payload,
        isFetching: false,
      };

    // actions for sign up
    case authActionTypes.SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
      };
    case authActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
      };
    case authActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
        authError: action.payload,
      };

    // actions for sign out
    case authActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isFetching: true,
      };
    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: null,
      };
    case authActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
