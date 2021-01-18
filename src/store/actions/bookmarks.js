import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS } from './types';

export const bookmarkItem = (item) => {
  return {
    type: BOOKMARK_ITEM,
    payload: item
  };
};

export const unBookmarkItem = (item) => {
  return {
    type: UNBOOKMARK_ITEM,
    payload: item
  };
};

export const getBookmarkItems = () => {
  let bookmarkItems = localStorage.getItem('bookmarks');
  bookmarkItems = bookmarkItems === null ? [] : JSON.parse(bookmarkItems);
  return {
    type: GET_BOOKMARK_ITEMS,
    payload: bookmarkItems
  };
};
