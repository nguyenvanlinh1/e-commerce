import {
  CREATE_RATING_FAILURE,
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  GET_RATING_FAILURE,
  GET_RATING_REQUEST,
  GET_RATING_SUCCESS,
} from "./ActionType";

const initialState = {
  ratings: [],
  rating: null,
  loading: false,
  error: null,
};

export const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATING_REQUEST:
    case CREATE_RATING_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        ratings: action.payload.ratings,
        rating: action.payload,
      };
    case CREATE_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        ratings: [...state.ratings, action.payload.ratings],
        error: null,
      };
    case GET_RATING_FAILURE:
    case CREATE_RATING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
