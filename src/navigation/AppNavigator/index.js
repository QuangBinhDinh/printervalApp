import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Icon, Text } from "native-base";
import HomeScreen from "../../modules/Home";
import SettingScreen from "../../modules/Setting";
import { useCustomTheme } from "../../components/hooks/useCustomTheme";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    const { colors, fonts } = useCustomTheme();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Icon as={<AntDesign name="home" />} size={'6'} color={!focused ? colors.UNFOCUSED_TAB_BAR : colors.FOCUSED_TAB_BAR} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text fontSize={14} color={!focused ? colors.UNFOCUSED_TAB_BAR : colors.FOCUSED_TAB_BAR} >Home</Text>
                )
            }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Icon as={<AntDesign name="setting" />} size={'6'} color={!focused ? colors.UNFOCUSED_TAB_BAR : colors.FOCUSED_TAB_BAR} />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text fontSize={14} color={!focused ? colors.UNFOCUSED_TAB_BAR : colors.FOCUSED_TAB_BAR} >Setting</Text>
                )
            }}
                name="SettingScreen"
                component={SettingScreen}
            />

        </Tab.Navigator>
    )
}
export default BottomTabs
