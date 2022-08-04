//UI
import React, { useEffect, useState, memo } from "react";
import { Box, Text, Input, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { ScrollView as Scroll } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "../../components/Swiper";
import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import { getCustomTheme } from "../../components";


const CategoryTabBar = ({ goToPage, activeTab, tabs, containerStyle }) => {

    return (
        <Scroll
            style={{ height: 75, width: '100%' }}
            contentContainerStyle={{ alignItems: 'center', paddingVertical: 5 }}
            horizontal
        >
            {
                tabs.map((tab, index) => (
                    <TouchableOpacity
                        style={{ height: '100%', width: 100, justifyContent: 'center', alignItems: 'center' }}
                        key={tab}
                        onPress={() => goToPage(index)}>
                        <Text fontSize={16} fontWeight={'500'}>{tab}</Text>
                        {activeTab == index && <Box
                            h={'5ox'}
                            w={'100%'}
                            alignSelf={'flex-end'}
                            color={'red.200'}
                        />}
                    </TouchableOpacity>
                ))
            }
        </Scroll>
    )
}

export default memo(CategoryTabBar)