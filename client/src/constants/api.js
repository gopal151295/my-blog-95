import { API_URL } from ".";

export const FETCH_ALL_POSTS_API = (skip, limit) => {
  return `${API_URL}/posts?skip=${skip}&limit=${limit}`;
};