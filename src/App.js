import Router from "./navigation";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import Store from "./store";
import React from "react";
import { lightTheme } from "./styles";
const theme = extendTheme({
    colors: {
        light: lightTheme
    }
})
const App = () => {
    return (
        <Provider store={Store}>
            <NativeBaseProvider config={{}} theme={theme}>
                <Router></Router>
            </NativeBaseProvider>
        </Provider>

    )
}
export default App