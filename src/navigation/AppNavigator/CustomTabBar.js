import React, { useEffect } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { Row, Box, Text } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { getCustomTheme, TextNormal } from '../../components';
import { Apps, AppsFill, Bell, BellFill, Cart, CartFill, Heart, HeartFill, User, UserFill, Home, HomeFill } from '../../assets/image/Svg'

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { colors } = getCustomTheme();
    return (
        <Row
            w={SCREEN_WIDTH}
            h={SCREEN_HEIGHT * 0.08}
            bg={'white'}
            borderWidth={0}>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };
                    {/* const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    }; */}



                    return (
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                        >
                            {options.tabBarIcon({ focused: isFocused })}
                            <TextNormal style={{ color: isFocused ? colors.FOCUSED_TAB_BAR : colors.UNFOCUSED_TAB_BAR }}
                                mt={'5%'}
                                fontSize={12}>
                                {label}
                            </TextNormal>
                        </TouchableOpacity>
                    )
                })
            }
        </Row>
    )
}

export default CustomTabBar