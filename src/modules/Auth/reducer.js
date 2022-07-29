import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: '',
    userName: '',
    password: '',
    logged: false,
}

/**
 * Kết hợp action với reducer làm một reducer 
 */
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //define cac action 
        login: (state, action) => {
            let payload = action.payload;
            state.userName = payload.userName;
            state.password = payload.password;
            state.logged = true
        },
        logout: (state, action) => state = initialState
    }

})
export default auth
