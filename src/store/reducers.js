import auth from "../modules/Auth/reducer";
import { combineReducers } from "@reduxjs/toolkit";
import ApiReducer from "./Api/ApiReducer";
import ThemeReducer from "./Theme/ThemeReducer";

export const rootReducer = combineReducers({
    AuthReducer: auth.reducer,
    ApiReducer,
    ThemeReducer
})