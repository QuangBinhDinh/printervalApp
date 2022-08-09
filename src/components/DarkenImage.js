import React from 'react';
import { View } from 'native-base';

export const DarkenView = ({ children, style, opacity = 0.45 }) => (
    <View style={{
        width: '100%', height: '100%', backgroundColor: `rgba(0,0,0,${opacity})`,
        ...style
    }}>
        {children}
    </View>
)