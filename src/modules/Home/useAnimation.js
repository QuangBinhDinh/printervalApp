import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * Animation chuyển màu header 
 * @param {string} headerColor hex color của header background 
 * @returns 
 */
export const useHeaderAnimation = (headerColor) => {

    const headerColorValue = useRef(new Animated.Value(0)).current;
    const headerToWhite = () => {
        Animated.timing(headerColorValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const headerToNormal = () => {
        Animated.timing(headerColorValue, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const headerColorNew = headerColorValue.interpolate({
        inputRange: [0, 1],
        outputRange: [headerColor, "rgba(255,255,255,1)"]
    })

    return { headerToWhite, headerToNormal, headerColorNew }
}

export const useInputAnimation = (color) => {
    const colorVal = useRef(new Animated.Value(0)).current;
    const inputToGray = () => {
        Animated.timing(colorVal, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const inputToNormal = () => {
        Animated.timing(colorVal, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const inputColorNew = colorVal.interpolate({
        inputRange: [0, 1],
        outputRange: ["#FFFFFF", color]
    })

    return { inputToGray, inputToNormal, inputColorNew }
}