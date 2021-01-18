import { SET_LOADING, GET_STORIES, SEARCH_STORIES } from '../actions/types';

const initialState = {
  loading: true,
  stories: [],
  searchResults: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_STORIES:
      return { ...state, stories: payload, loading: false };
    case SEARCH_STORIES:
      return { ...state, searchResults: payload, loading: false };
    default:
      return state;
  }
};
