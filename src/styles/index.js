import { darkColors, lightColors } from "./colors"
import { fontConfig, fonts } from "./font"
import { StyleSheet } from "react-native"

export const lightTheme = {
    colors: lightColors,
    fontConfig,
    fonts
}

export const darkTheme = {
    colors: darkColors,
    fontConfig,
    fonts
}

export const margin = {
    halfSmall: 2,
    halfSmallPx: '2px',
    small: 4,
    smallPx: '4px',
    medium: 6,
    mediumPx: '6px',
}

export const commonStyle = {
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
}