import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_REVIEW_FAILURE,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
} from "./ActionType";

const initialState = {
  reviews: [],
  review: null,
  loading: false,
  error: null,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
    case CREATE_REVIEW_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload.reviews,
        review: action.payload,
      };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: [...state.reviews, action.payload.reviews],
        error: null,
      };
    case GET_REVIEW_FAILURE:
    case CREATE_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
