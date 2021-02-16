import { combineReducers } from "redux";

import postReducer from "./post";
import postsReducer from "./posts";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
