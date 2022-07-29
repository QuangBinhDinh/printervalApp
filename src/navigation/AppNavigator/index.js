import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Icon, useTheme, Text } from "native-base";
import HomeScreen from "../../modules/Home";
import SettingScreen from "../../modules/Setting";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    const { colors: { light } } = useTheme();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Icon as={<AntDesign name="home" />} size={'6'} color={!focused ? light.UNFOCUSED_TAB_BAR : light.FOCUSED_TAB_BAR} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text fontSize={14} color={!focused ? light.UNFOCUSED_TAB_BAR : light.FOCUSED_TAB_BAR} >Home</Text>
                )
            }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Icon as={<AntDesign name="setting" />} size={'6'} color={!focused ? light.UNFOCUSED_TAB_BAR : light.FOCUSED_TAB_BAR} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text fontSize={14} color={!focused ? light.UNFOCUSED_TAB_BAR : light.FOCUSED_TAB_BAR} >Setting</Text>
                )
            }}
                name="SettingScreen"
                component={SettingScreen}
            />

        </Tab.Navigator>
    )
}
export default BottomTabs
