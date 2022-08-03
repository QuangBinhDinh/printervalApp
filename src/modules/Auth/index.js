import React, { useEffect, useState, useCallback } from "react";
import { Box, Text } from "native-base";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useDispatch, useSelector } from "react-redux";
import auth from "./reducer";
import { loginAction, logoutAction } from "../store/Auth/AuthAction";
import * as yup from 'yup';
import { useInput } from "../../components/hooks/useInput";

const LoginSelector = createSelector(
    state => state.AuthReducer,
    auth => auth,
)
const initalInput = {
    username: "",
    password: "",
}
const inputSchema = yup.object().shape({
    username: yup.string().required("Field cannot be empty"),
    password: yup.string().required("Field cannot be empty")
})


const Login = () => {
    const authInfo = useSelector(LoginSelector);
    const dispatch = useDispatch();
    const { login, logout } = auth.actions; // action cua reducer

    const onInputSuccess = (input) => {// xử lý sau khi nhập input thành công
        dispatch(login(input));
    }
    const { input, error, validate, setFieldName } = useInput(initalInput, inputSchema, onInputSuccess);

    const LogAction = async () => {
        await validate();
    }
    return (
        <Box flex={1} alignItems={'center'}>
            <Box mt={'100px'} h={'200px'} w={'90%'} justifyContent={'space-around'} alignItems={'center'} borderWidth={1}>
                <Box w={'100%'}>
                    <FloatingLabelInput
                        label={'Username'}
                        value={input?.username}
                        onChangeText={text => setFieldName("username", text)}
                    />
                    <Text mt={'5px'} ml={'15px'} color={'red.500'} fontSize={11}>{error?.username}</Text>
                </Box>
                <Box w={'100%'}>
                    <FloatingLabelInput
                        label={'Password'}
                        value={input?.password}
                        onChangeText={text => setFieldName("password", text)}
                    />
                    <Text mt={'5px'} ml={'15px'} color={'red.500'} fontSize={11}>{error?.password}</Text>
                </Box>

            </Box>
            <TouchableOpacity style={styles.logButton}
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

const styles = StyleSheet.create({
    logButton: {
        width: '80%', height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue',
        marginTop: 40
    }
})

export default Login