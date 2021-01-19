import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS, SET_LOADING } from './types';

export const setLoading = () => ({
  type: SET_LOADING
});

export const bookmarkItem = (item) => ({
  type: BOOKMARK_ITEM,
  payload: item
});

export const unBookmarkItem = (item) => ({
  type: UNBOOKMARK_ITEM,
  payload: item
});

export const getBookmarkItems = () => {
  let bookmarkItems = localStorage.getItem('bookmarks');
  bookmarkItems = bookmarkItems === null ? [] : JSON.parse(bookmarkItems);
  return {
    type: GET_BOOKMARK_ITEMS,
    payload: bookmarkItems
  };
};
