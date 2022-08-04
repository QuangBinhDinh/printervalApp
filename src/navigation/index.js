import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Linking, SafeAreaView, KeyboardAvoidingView, Platform, } from 'react-native';
import Login from "../modules/Auth";
import BottomTabs from "./AppNavigator";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { navigationRef } from "./service";

const Stack = createStackNavigator();
const LoginSelector = createSelector(
    state => state.AuthReducer,
    auth => auth,
)
const Router = () => {
    const authInfo = useSelector(LoginSelector);

    useEffect(() => {
        const listenUrl = Linking.addEventListener('url', (url) => {
            console.log("Incoming link");
            console.log(url);
        })
        return () => listenUrl.remove()
    }, [])

    useEffect(() => {
        Linking.getInitialURL('url', (url) => {
            console.log("Opening app");
            console.log(url);
        })
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {
                        authInfo.logged ? <Stack.Screen name="Login" component={Login} />
                            : <Stack.Screen name="App" component={BottomTabs} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>

    )
}
export default Router
