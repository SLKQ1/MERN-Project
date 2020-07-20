import authActionTypes from "./auth.type";
const axios = require("axios").default;

// action for starting sign in
export const signInStart = () => {
  return {
    type: authActionTypes.SIGN_IN_START,
  };
};
// action for successful sign in
export const signInSuccess = (user) => {
  return {
    type: authActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};
// action for unsuccessful sign in
export const signInFailure = (error) => {
  return {
    type: authActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
};
// async method to fetch user using credentials
export const signInStartAsync = (credentials) => {
  return (dispatch) => {
    dispatch(signInStart());
    axios
      .post("/auth/sign-in", credentials)
      .then((user) => {
        if (user.data === false) {
          dispatch(signInFailure("Sorry your email or password was incorrect"));
        } else {
          dispatch(signInSuccess(user.data));
        }
      })
      .catch((error) => {
        dispatch(signInFailure(error.message));
      });
  };
};

// action to start sign up
export const signUpStart = () => {
  return {
    type: authActionTypes.SIGN_UP_START,
  };
};
// action for sign up success
export const signUpSuccess = (user) => {
  return {
    type: authActionTypes.SIGN_UP_SUCCESS,
    payload: user,
  };
};
// action for sign up failure
export const signUpFailure = (error) => {
  return {
    type: authActionTypes.SIGN_UP_FAILURE,
    payload: error,
  };
};
// async method to create user
export const signUpStartAsync = (credentials) => {
  return (dispatch) => {
    dispatch(signUpStart());
    axios
      .post("/auth/sign-up", credentials)
      .then((user) => {
        if (user.data === false) {
          dispatch(signUpFailure("Sorry, this user already exists "));
        } else {
          dispatch(signUpSuccess(user.data));
        }
      })
      .catch((error) => {
        dispatch(signUpFailure(error.message));
      });
  };
};

// actions for signing out
export const signOutStart = () => {
  return {
    type: authActionTypes.SIGN_OUT_START,
  };
};
// action for sign out success
export const signOutSuccess = () => {
  return {
    type: authActionTypes.SIGN_OUT_SUCCESS,
  };
};
// action for sign out failure
export const signOutFailure = (error) => {
  return {
    type: authActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};
// action to make async sign out
export const signOutStartAsync = () => {
  return (dispatch) => {
    dispatch(signOutStart());
    axios
      .get("/auth/sign-out")
      .then(() => {
        dispatch(signOutSuccess());
      })
      .catch((error) => {
        dispatch(signUpFailure(error.message));
      });
  };
};
