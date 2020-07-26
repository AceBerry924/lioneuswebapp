import { combineReducers } from "redux";
import authReducer from "./authReducer";
import checkoutReducer from "./checkoutReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
  authReducer,
  checkoutReducer,
  searchReducer
});

export default rootReducer;
