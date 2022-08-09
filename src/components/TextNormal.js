import React from 'react';
import { Text } from 'native-base';
import { getCustomTheme } from './hooks/getCustomTheme';

import { fonts } from '../styles/font';
export const TextNormal = ({ children, ...rest }) => (
    <Text
        fontFamily={fonts.mainFont}
        fontWeight={500}
        fontSize={16}
        {...rest}
    >
        {children}
    </Text>
)