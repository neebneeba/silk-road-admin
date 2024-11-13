import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import userReducer from "../slices/user.slice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
