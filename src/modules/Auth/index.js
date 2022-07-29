import React, { useEffect, useState } from "react";
import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { createSelector } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import auth from "./reducer";
// import { loginAction, logoutAction } from "../store/Auth/AuthAction";
import { getAllProduct } from "./services";
import { createGet } from "../../api/dispatch";

const LoginSelector = createSelector(
    state => state.AuthReducer,
    auth => auth,
)
const Login = () => {
    const authInfo = useSelector(LoginSelector);
    const dispatch = useDispatch();
    const { login, logout } = auth.actions; // action cua reducer

    const [product, setProduct] = useState([]);

    const LogAction = () => {
        if (!authInfo.logged) dispatch(login({
            userName: "testUser",
            passWord: "testing"
        }))
        else dispatch(logout())
    }
    // const GetProduct = () => {
    //     dispatch(getAllProduct((res) => setProduct(res)));
    // }
    return (
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <TouchableOpacity style={{ width: '80%', height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}
                onPress={LogAction}>
                <Text fontSize={'12px'} color={'white'}>{authInfo.logged ? 'Logout' : 'Login'}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ width: '80%', height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}
                onPress={GetProduct}>
                <Text fontSize={'12px'} color={'white'}>{authInfo.isAuth ? 'Logout' : 'Login'}</Text>
            </TouchableOpacity> */}

        </Box>
    )
}
export default Login