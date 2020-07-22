import wristShotActionTypes from "./wristShots.type";

const INITIAL_STATE = {
  wrist_shots: [],
  wrist_shot: null,
  isFetching: false,
  errorMessage: undefined,
};

const wristShotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // retrieving wrist shots
    case wristShotActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case wristShotActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        wrist_shots: action.payload,
      };
    case wristShotActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // retrieving a wrist shot
    case wristShotActionTypes.FETCH_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case wristShotActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        wrist_shot: action.payload,
      };
    case wristShotActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default wristShotReducer;
