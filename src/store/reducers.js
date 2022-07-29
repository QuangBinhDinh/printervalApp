import auth from "../modules/Auth/reducer";
import { combineReducers } from "@reduxjs/toolkit";
import ApiReducer from "./Api/ApiReducer";

export const rootReducer = combineReducers({
    AuthReducer: auth.reducer,
    ApiReducer,
})