//UI
import React, { useEffect, useState, memo } from "react";
import { Box, Input, Icon, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View, StyleSheet, ScrollView, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "../../components/Swiper";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from "react-native-scrollable-tab-view";
import { getCustomTheme } from "../../components";

import CategoryTabBar from "./CategoryTabBar";


const CategoryTitleConfig = [
    {
        title: 'Back To School',
        color: '#51bc37',
        id: 0,
    },
    {
        title: 'Clothing',
        color: '#fcdd30',
        id: 1,
    },
    {
        title: 'Accessories',
        color: '#fb761f',
        id: 2,
    },
    {
        title: 'Home & Living',
        color: '#ec3445',
        id: 3
    },
    {
        title: 'Kid & Babies',
        color: '#227694',
        id: 4,
    },
    {
        title: 'Home Decor',
        color: '#484572',
        id: 5,
    },
    {
        title: 'Table Decor',
        color: '#b14e9c',
        id: 6,
    },
    // {
    //     title: 'Accessories',
    //     color: '#fb761f'
    // },
    // {
    //     title: 'Accessories',
    //     color: '#fb761f'
    // }
]
const CategoryScreen = () => {
    const { colors, fonts } = getCustomTheme();
    const [dragging, setDrag] = useState(false);

    // const onScrollTab = (num) => { // hàm scroll tabBar khi scroll screen ở dưới 
    //     if (Number.isInteger(num)) TabBarService.scrollTo(num)
    // }
    return (
        <Box flex={1} bg={'white'}>
            <Box
                w={'100%'}
                flexDir={'row'}
                alignItems={'center'}
                height={'75px'}
                justifyContent={'space-around'}
            >
                <Input
                    w={'80%'}
                    rightElement={<Icon as={<AntDesign name='search1' />} size={6} mr={2} />}
                    borderRadius={8}
                    bg={colors.GRAY_INPUT}
                    fontSize={14}
                    lineHeight={18}
                />

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} >
                    <Icon
                        as={<Feather name="shopping-cart" />}
                        size={8}
                        color={'black'} />
                </TouchableOpacity>


            </Box>
            <ScrollableTabView
                style={{ flex: 1 }}
                renderTabBar={() => <CategoryTabBar items={CategoryTitleConfig} />}
                prerenderingSiblingsNumber={Infinity}
            // onScrollBeginDrag={() => setDrag(true)}
            // onScrollEndDrag={() => setDrag(false)}
            // onScroll={onScrollTab}
            >
                {CategoryTitleConfig.map(item => (
                    <Category key={item.title} tabLabel={item.title} />
                ))}
            </ScrollableTabView>

        </Box>
    )
}
export default CategoryScreen

const Category = memo(() => {
    return (
        <Box flex={1} flexDir={'row'} >
            <Box flex={2}>
                <ScrollView style={{ flex: 1, borderRightWidth: 1 }} showsVerticalScrollIndicato={false}>
                    <Center width={'100%'} style={{ aspectRatio: 1 }} borderBottomWidth={1} borderBottomColor={'black'}>

                    </Center>
                </ScrollView>
            </Box>
            <Box flex={8}>
                <ScrollView style={{ flex: 1 }}>

                </ScrollView>
            </Box>
        </Box>
    )
})
const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});