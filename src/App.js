import Router from "./navigation";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import Store from "./store";
import React from "react";
// import { customTheme } from "./styles";
// const theme = extendTheme(customTheme)
const App = () => {
    return (
        <Provider store={Store}>
            <NativeBaseProvider>
                <Router></Router>
            </NativeBaseProvider>
        </Provider>

    )
}
export default App