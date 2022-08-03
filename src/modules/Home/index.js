import React, { useEffect, useState, memo } from "react";
import { Box, Text, Input, Icon, Image, Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "../../components/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { Shadow } from 'react-native-neomorph-shadows';
import LinearGradient from "react-native-linear-gradient";
import { MainCategory, PopularCategory, ProductCard } from "./component";
import { useCustomTheme } from "../../components/hooks/useCustomTheme";

const HomeScreen = () => {
    const { colors, fonts } = useCustomTheme();
    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle={{ alignItems: 'center' }}
            showsVerticalScrollIndicator={false}
            extraHeight={20}
            enableOnAndroid>
            <Box w={'100%'} flexDir={'row'} alignItems={'center'}
                borderWidth={1} height={'60px'} justifyContent={'center'}>
                <Icon as={<Ionicons name="ios-notifications-outline" />} size={8} color={'black'}
                    style={{ position: 'absolute', left: 10 }}
                />
                <Text fontSize={18}>PRINTERVAL</Text>
                <Box w={'20%'} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}
                    style={{ position: 'absolute', right: 10 }}>
                    <TouchableOpacity>
                        <Icon as={<Ionicons name="ios-search" />} size={8} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon as={<Feather name="shopping-cart" />} size={8} color={'black'} />
                    </TouchableOpacity>

                </Box>

            </Box>

            {/* Banner section*/}
            <Swiper autoplay={true} showsPagination={false} style={{ backgroundColor: 'gray', height: 200 }}
                scrollEnabled={true}
                loop={true}>
                <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Image source={require("../../assets/banner/banner1.png")} flex={1} alt={"Banner 1"} >
                    </Image>
                </Box>
                <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Image source={require("../../assets/banner/banner2.png")} flex={1} alt={"Banner 1"} />
                </Box>
                <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Image source={require("../../assets/banner/banner3.png")} flex={1} alt={"Banner 3"} />
                </Box>
            </Swiper>

            {/* Main category section*/}
            <Box w={'100%'} flexWrap={'wrap'} flexDir={'row'} mt={'15px'}>
                {MainCategoryConfig.map(item => <MainCategory key={item.title}
                    title={item.title}
                    requireImage={item.requireImage}
                />)}
            </Box>

            {/* Popular design section*/}
            <Box w={'100%'} my={'10px'} mt={'40px'} justifyContent={'center'} alignItems={'center'} >
                <Text fontFamily={fonts.sectionTitle} fontSize={20} color={'#e87809'}>Popular designs</Text>
                <Button position={'absolute'} right={'0px'} backgroundColor={'transparent'}
                    rightIcon={<Icon as={<AntDesign />} name={'right'} size={4} color={'black'} />}>
                    <Text color={'black'} fontSize={16}>More</Text>
                </Button>
            </Box>
            <Box w={'100%'} flexWrap={'wrap'} flexDir={'row'}>
                {
                    PopularCategoryConfig.map(item => <PopularCategory key={item.title}
                        title={item.title}
                        imageUri={item.uri}
                        color={item.color}
                    />)
                }
            </Box>

            {/* Top sales section*/}
            <Box w={'100%'} my={'10px'} mt={'40px'} justifyContent={'center'} alignItems={'center'} >
                <Text fontFamily={fonts.sectionTitle} fontSize={20} color={'#c52c29'}>Top Sales Off</Text>
                <Button position={'absolute'} right={'0px'} backgroundColor={'transparent'}
                    rightIcon={<Icon as={<AntDesign />} name={'right'} size={4} color={'black'} />}>
                    <Text color={'black'} fontSize={16}>More</Text>
                </Button>
            </Box>
            <Box w={'100%'} flexWrap={'wrap'} flexDir={'row'}>
                {
                    ProductCardConfig.map(item => <ProductCard key={item.id}
                        title={item.title}
                        price={item.price}
                        originPrice={item.originPrice}
                    />)
                }
            </Box>
            {/* <Input mt={'200px'} borderWidth={1} h={'50px'} w={'80%'} fontSize={14} /> */}
        </KeyboardAwareScrollView>


    )
}
const MainCategoryConfig = [
    {
        title: "Clothing",
        requireImage: require("../../assets/image/Category1.png"),

    },
    {
        title: "Jacket",
        requireImage: require("../../assets/image/Category2.png"),

    },
    {
        title: "For men",
        requireImage: require("../../assets/image/Category3.png")
    },
    {
        title: "Stylish",
        requireImage: require("../../assets/image/Category4.png")
    },
    {
        title: "Other",
        requireImage: require("../../assets/image/Category2.png")
    },
    {
        title: "Random bullshit",
        requireImage: require("../../assets/image/Category3.png")
    }
]

const PopularCategoryConfig = [
    {
        title: "Music",
        uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/uyiir-gpewwmg-gviwx-vsgo-ferh-xwlmvx-pq011121-6180e3eg8284h.trk.png",
        color: "#F7A34A"
    },
    {
        title: "Gift",
        uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/14/coykmaey-znk-znxkk-yzuumky-znk-znxkk-yzuumky-z-ynoxz-i-vi180322-jh2j328178l00g50k89hk39k94li1440.vtm.png",
        color: "#484572"
    },
    {
        title: "Vintage",
        uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/lsxip-gepmjsvrme-qshivr-zmrxeki-psks-x-wlmvx-g-xu030222-036jj7h091gg709fi06ghgf7j7h48e27.trk.png",
        color: "#62B64D"
    },
    {
        title: "Birthday",
        uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/14/kix-mr-pswiv-ai39vi-hsmrk-fyxx-wxyjj-yjs-efhygxmsr-wxmgoiv-g-hr-080422-h2i4g0023286gh7251h51f755110e58e.trk.png",
        color: "#FA5659"
    },
]

const ProductCardConfig = [
    {
        id: '1',
        title: "Universal Black Rock T-shirt For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    },
    {
        id: '2',
        title: "Universal Black Rock T-shirt Special Version For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    },
    {
        id: '3',
        title: "Chirstmas T-shirt For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    },
    {
        id: '4',
        title: "Universal Black Rock T-shirt For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    },
    {
        id: '5',
        title: "Universal Black Rock T-shirt For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    },
    {
        id: '6',
        title: "Universal Black Rock T-shirt For Men  ",
        price: '$12.95',
        originPrice: '$15.95'
    }
]



export default HomeScreen