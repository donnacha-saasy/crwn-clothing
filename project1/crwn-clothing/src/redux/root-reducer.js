import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//object that stores all reducers
export default combineReducers({
    user: userReducer
})