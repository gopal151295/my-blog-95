let apiUrl = "prod";
export let API_URL;

if (process.env.NODE_ENV !== "production")
  apiUrl = process.env.REACT_APP_ENV === "prod" ? "prod" : "dev";

if (apiUrl === "prod") {
  API_URL = "https://google.com";
}
if (apiUrl === "dev") {
  API_URL = "http://localhost:3000";
}

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_ALL_POSTS_SUCCESS = "FETCH_ALL_POSTS_SUCCESS";
export const FETCH_ALL_POSTS_ERROR = "FETCH_ALL_POSTS_ERROR";