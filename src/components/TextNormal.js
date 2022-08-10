import React from 'react';
import { Text } from 'native-base';
import { Platform } from 'react-native';
import { getCustomTheme } from './hooks/getCustomTheme';

import { fonts } from '../styles/font';
export const TextNormal = ({ children, ...rest }) => (
    <Text
        fontFamily={fonts.mainFont}
        fontWeight={Platform.OS == 'android' ? 700 : 600}
        fontSize={16}
        // borderWidth={1}
        {...rest}
    >
        {children}
    </Text>
)