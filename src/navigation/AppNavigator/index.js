import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Icon, Text } from "native-base";
import HomeScreen from "../../modules/Home";
import SettingScreen from "../../modules/Setting";
import CategoryScreen from "../../modules/Category";
import WishList from "../../modules/WishList";
import { getCustomTheme } from "../../components";
import CustomTabBar from "./CustomTabBar";
import { Apps, AppsFill, Bell, BellFill, Cart, CartFill, Heart, HeartFill, User, UserFill, Home, HomeFill } from '../../assets/image/Svg'

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    const { colors, fonts } = getCustomTheme();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,

        }}
            tabBar={props => <CustomTabBar {...props} />}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <HomeFill width={18} height={18} />
                        else return <Home width={18} height={18} />
                    }
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Category',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <AppsFill width={18} height={18} />
                        else return <Apps width={18} height={18} />
                    }
                }}
                name="CategoryScreen"
                component={CategoryScreen}
            />
            <Tab.Screen
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <CartFill width={18} height={18} />
                        else return <Cart width={18} height={18} />
                    }
                }}
                name="WishList"
                component={WishList}
            />
            <Tab.Screen
                options={{
                    title: 'Updates',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <BellFill width={18} height={18} />
                        else return <Bell width={18} height={18} />
                    }
                }}
                name="Updates"
                component={WishList}
            />
            <Tab.Screen
                options={{
                    title: 'You',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <UserFill width={18} height={18} />
                        else return <User width={18} height={18} />
                    }
                }}
                name="UserScreen"
                component={SettingScreen}
            />


        </Tab.Navigator>
    )
}
export default BottomTabs
