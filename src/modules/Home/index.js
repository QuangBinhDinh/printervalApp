//UI
import React, { useEffect, useState, memo, useRef } from "react";
import { Box, Text, Input, Icon, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View, StyleSheet, Image as NativeImage, TextInput, ScrollView, Animated, Platform, } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "../../components/Swiper";
import { ScrollView as Scroll } from "react-native-gesture-handler";
import { Shadow } from 'react-native-neomorph-shadows';
import LinearGradient from "react-native-linear-gradient";
import { margin } from "../../styles";

//Image
import { ImageUri } from "../../constants/imageUri";
import { PrintervalLogo, BottomBorder } from "../../assets/image/Svg";

//Component
import { MainCategory, PopularCategory, ProductCard, SectionTitle, } from "./component";
import { getCustomTheme, TextBold, TextNormal, DarkenView, } from "../../components";
import { MainCategoryConfig, PopularCategoryConfig, ProductCardConfig } from "./fakeData";
import Search from "../Search";

//API + Redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

//Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { fontSize } from "../../styles/font";
import { commonStyle } from "../../styles";
import { useHeaderAnimation, useInputAnimation } from "./useAnimation";

const AnimatedRow = Animated.createAnimatedComponent(Row)
    ;
const HomeScreen = () => {
    const { colors, fonts } = getCustomTheme();
    const headerColor = useRef(new Animated.Value(0)).current;

    const { headerToWhite, headerToNormal, headerColorNew } = useHeaderAnimation(colors.PINK_BG);
    const { inputToGray, inputToNormal, inputColorNew } = useInputAnimation(colors.GRAY_INPUT);
    const [searchVisiblie, setSearchVisible] = useState(false);
    const [keyword, setKeyword] = useState("");
    const inputRef = useRef();

    const renderSearchButton = () => { // render button search header
        if (!searchVisiblie) return (
            <TouchableOpacity onPress={() => {
                setSearchVisible(true);
                headerToWhite(); // animation color
                inputToGray();
                inputRef.current?.focus();
            }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <Icon as={<Feather name="search" />} size={5} color={'#ff7300'} />
            </TouchableOpacity>
        )
        else return (
            <TouchableOpacity onPress={() => {
                setSearchVisible(false);
                headerToNormal();// animation color
                inputToNormal();
                setKeyword("");//reset input
                inputRef.current?.blur();
            }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <Icon as={<Feather name={'arrow-left'} />} size={5} color={'black'} />
            </TouchableOpacity>
        )
    }

    return (
        <Box flex={1} bg={'white'}>
            {/* Header */}
            <Animated.View style={{
                width: '100%', height: 90, backgroundColor: headerColorNew,
                justifyContent: 'center', alignItems: 'center', zIndex: 999
            }}>
                <AnimatedRow w={'94%'} h={'48px'}
                    style={{ backgroundColor: inputColorNew }}
                    borderRadius={60}
                    overflow={'hidden'}
                    alignItem={'center'}>
                    {renderSearchButton()}
                    <Row flex={6} alignItems={'center'}>
                        <TextInput style={{ width: '100%', }}
                            //placeholder={'Search for anything on Printerval'}
                            // placeholderTextColor={'gray'}
                            onChangeText={text => setKeyword(text)}
                            value={keyword}
                            fontSize={16}
                            fontFamily={fonts.mainFont}
                            fontWeight={'300'}
                            selectionColor={'black'}
                            ref={inputRef}
                            blurOnSubmit={false}
                            onFocus={() => {
                                setSearchVisible(true);
                                headerToWhite();
                                inputToGray();
                            }}
                        />
                        {// render custom placeholder, chỉ hiện khi keyword rỗng
                            keyword == "" && <Row position={'absolute'} left={'5px'} alignItems={'center'} pointerEvents={'none'}>
                                <Text
                                    fontFamily={fonts.mainFont}
                                    fontSize={16}
                                    color={'grey'}>
                                    {'Search for anything on '}
                                </Text>
                                <Image source={require('../../assets/image/TextLogo.png')}
                                    w={'90px'} h={'18px'}
                                    mt={Platform.OS == 'ios' ? '-2px' : 0} //different font render in IOS and Android
                                />
                            </Row>
                        }
                    </Row>
                </AnimatedRow>
            </Animated.View>
            <Image
                source={require('../../assets/image/PinkBottom.png')}
                w={'100%'}
                h={'10px'}
                zIndex={999}
            />

            {/* Search screen */}
            {searchVisiblie && <Search />}
            <Box flexGrow={1} flexBasis={1} >
                <ScrollView
                    style={{ backgroundColor: 'white', width: '100%', height: '100%', marginTop: -10 }}
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid
                    bounces={false}  >

                    {/* Banner */}
                    <Swiper
                        autoplay={true}
                        showsPagination={true}
                        style={{ backgroundColor: 'gray', height: 200, marginTop: 25 }}
                        scrollEnabled={true}
                        loop={true}>
                        <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                            <Image source={{ uri: ImageUri.Banner1 }} w={'100%'} h={'100%'} alt={"Banner 1"} />
                        </Box>
                        <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} bg={'white'}>
                            <Image source={{ uri: ImageUri.Banner2 }} w={'100%'} h={'100%'} alt={"Banner 2"} />
                        </Box>
                        <Box w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                            <Image source={require("../../assets/banner/banner2.png")} w={'100%'} h={'100%'} alt={"Banner 3"} />
                        </Box>
                    </Swiper>

                    {/* Back to school section */}
                    <TouchableOpacity style={{
                        width: '100%', height: 200, marginTop: 25
                    }}>
                        <ImageBackground
                            source={require("../../assets/image/BackToSchool.png/")}
                            style={{ flex: 1, }} >
                            <DarkenView style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text
                                    fontFamily={fonts.bigCategory}
                                    fontWeight={700}
                                    fontSize={32}
                                    color={'white'}
                                >
                                    BACK TO SCHOOL
                                </Text>
                                <TextNormal
                                    marginTop={'-7px'}
                                    color={'rgba(255,255,255,0.9)'}
                                    fontSize={18}>
                                    Designed and sold by artists !
                                </TextNormal>
                            </DarkenView>
                        </ImageBackground>
                    </TouchableOpacity>

                    {/* Main category section*/}
                    <Box mt={'25px'} w={'100%'}>
                        <SectionTitle > Pick up</SectionTitle>
                        <Box
                            w={'100%'}
                            px={'3%'}>
                            {MainCategoryConfig.map((item, i) => (
                                <Row justifyContent={'space-between'} mt={SCREEN_WIDTH * 0.03} key={i}>
                                    {
                                        item.map((item, index) => (
                                            <MainCategory
                                                title={item.title}
                                                key={index}
                                                index={index}
                                                requireImage={item.requireImage}
                                                bg={item.bg}
                                            />
                                        ))
                                    }
                                </Row>
                            ))}
                        </Box>
                    </Box>

                    {/* Popular design section*/}
                    <Box mt={'25px'} w={SCREEN_WIDTH}>
                        <SectionTitle > Popular designs</SectionTitle>
                        <Scroll
                            horizontal contentContainerStyle={{ paddingLeft: SCREEN_WIDTH * 0.03 }}
                            // style={{ marginTop: margin.small }}
                            showsHorizontalScrollIndicator={false}>
                            {
                                PopularCategoryConfig.map((item, i) => (
                                    <Box mr={SCREEN_WIDTH * 0.03} key={i}>
                                        {
                                            item.map((item, index) => (
                                                <PopularCategory key={item.title}
                                                    title={item.title}
                                                    logo={item.logo}
                                                />
                                            ))
                                        }
                                    </Box>
                                ))
                            }
                        </Scroll>
                    </Box>

                    {/* Top Sales section*/}
                    <Box mt={'25px'} w={SCREEN_WIDTH}>
                        <SectionTitle >Top sales today</SectionTitle>
                        <Scroll
                            horizontal contentContainerStyle={{ paddingLeft: margin.small, paddingTop: 10, paddingLeft: 12 }}
                            // style={{ marginTop: margin.small }}
                            showsHorizontalScrollIndicator={false}>
                            {
                                ProductCardConfig.map(item => <ProductCard key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    originPrice={item.originPrice}
                                />)
                            }
                        </Scroll>
                    </Box>

                    {/* Refer a friend */}

                    <TouchableOpacity style={{
                        width: '100%', height: 200, marginTop: 30
                    }} >
                        <ImageBackground
                            source={require("../../assets/image/ReferFriend.png/")}
                            style={{ flex: 1 }} >
                            <DarkenView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TextBold
                                    fontFamily={fonts.bigCategory}
                                    fontSize={36}
                                    color={'white'} >
                                    Refer-A-Friend
                                </TextBold>
                                <TextNormal
                                    color={'rgba(255,255,255,0.9)'}
                                    mt={'-7px'}
                                    w={'70%'}
                                    fontSize={fontSize.subTitlePx}
                                    lineHeight={'24px'}
                                    textAlign={'center'}>
                                    Get $5.00 to spend each time you refer a friend
                                </TextNormal>
                            </DarkenView>

                        </ImageBackground>

                    </TouchableOpacity>
                    <Center
                        py={'4px'}
                        w={'100%'}
                        bg={'#83d1f2'}>
                        <TextBold
                            fontSize={fontSize.subTitlePx}
                            color={'white'}>
                            Refer friends now !
                        </TextBold>
                    </Center>

                    {/* Recently viewed */}
                    {/* <Box mt={'50px'}>
                <Row alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontFamily={fonts.sectionTitle} fontSize={20} ml={'10px'}>Recently Viewed</Text>
                    <Button backgroundColor={'transparent'}
                        rightIcon={<Icon as={<AntDesign />} name={'right'} size={4} color={'black'} />}>
                        <Text color={'black'} fontSize={16}>More</Text>
                    </Button>
                </Row>
                <Box h={'200px'} >
                    <Scroll
                        style={{ borderTopColor: colors.LIGHT_BORDER, borderTopWidth: 1, borderBottomColor: colors.LIGHT_BORDER, borderBottomWidth: 1, }}
                        contentContainerStyle={{ paddingVertical: 8, alignItems: 'center' }}
                        horizontal >
                        {
                            ProductCardConfig.map(item => (<RecentlyView
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                originPrice={item.originPrice}
                            />))
                        }
                    </Scroll>
                </Box>
            </Box> */}
                    <Box h={'20px'}></Box>
                </ScrollView>

            </Box>

        </Box>



    )
}

export default HomeScreen