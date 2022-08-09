import React from 'react';
import { Text } from 'native-base';
import { getCustomTheme } from './hooks/getCustomTheme';

import { fonts } from '../styles/font';
export const TextBold = ({ children, ...rest }) => (
    <Text
        fontFamily={fonts.mainFont}
        fontWeight={700}
        fontSize={20}
        {...rest}
    >
        {children}
    </Text>
)