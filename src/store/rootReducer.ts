import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import configReducer from "@/slices/config.slice";
import userReducer from "@/slices/user.slice";

const rootReducer = combineReducers({
  config: configReducer,
  user: userReducer,
});

export default rootReducer;
