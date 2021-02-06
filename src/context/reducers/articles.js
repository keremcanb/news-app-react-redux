import {
  SET_LOADING,
  GET_ARTICLES,
  GET_ARTICLE,
  SEARCH_ARTICLES,
  GET_ARTICLES_SPORTS,
  HANDLE_PAGINATION,
  HANDLE_SEARCH
} from '../types';

const articles_reducer = (state, action) => {
  const { type, payload } = action;
  const { page, pages } = state;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_ARTICLES:
      return { ...state, articles: payload.articles, pages: payload.pages, loading: false };
    case GET_ARTICLES_SPORTS:
      return { ...state, articlesSports: payload, loading: false };
    case GET_ARTICLE:
      return { ...state, article: payload, loading: false };
    case SEARCH_ARTICLES:
      return { ...state, searchResults: payload.searchResults, pages: payload.pages, loading: false };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 1 };
    case HANDLE_PAGINATION:
      if (payload === 'inc') {
        let nextPage = page + 1;
        if (nextPage > pages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (payload === 'dec') {
        let prevPage = page - 1;
        if (prevPage < 0) {
          prevPage = pages - 1;
        }
        return { ...state, page: prevPage };
      }
      break;
    default:
      throw new Error(`no mathching "${type}" action type`);
  }
};

export default articles_reducer;
