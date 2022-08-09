//UI
import React, { useEffect, useState, memo, useRef } from "react";
import { Box, Text, Input, Icon, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View, StyleSheet, Image as NativeImage, TextInput, ScrollView } from "react-native";
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
import { PrintervalLogo } from "../../assets/image/Svg";

//Component
import { MainCategory, PopularCategory, ProductCard, SectionTitle, } from "./component";
import { getCustomTheme, TextBold, TextNormal, DarkenView, } from "../../components";

//API + Redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

//Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { fontSize } from "../../styles/font";
import { commonStyle } from "../../styles";

const HomeScreen = () => {
    const { colors, fonts } = getCustomTheme();
    const [onFocus, setFocus] = useState(false);
    const inputRef = useRef();

    const renderSearchButton = () => {
        if (!onFocus) return (
            <TouchableOpacity onPress={() => {
                setFocus(true);
                inputRef.current?.focus();
            }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon as={<Ionicons name="ios-search" />} size={8} color={'#ff7300'} />
            </TouchableOpacity>
        )
        else return (
            <TouchableOpacity onPress={() => {
                setFocus(false);
                inputRef.current?.blur();
            }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon as={<AntDesign name={'arrowleft'} />} color={'#ff7300'} size={7} />
            </TouchableOpacity>
        )
    }

    return (
        <Box flex={1}>
            <View style={{
                width: '100%', height: 60, backgroundColor: 'white', zIndex: 999,
                ...commonStyle.shadow
            }}>
                <Box w={'100%'} flexDir={'row'} alignItems={'center'} bg={'white'}

                    height={'100%'} justifyContent={'center'}>
                    {renderSearchButton()}
                    <Center flex={6}>
                        <TextInput style={{ width: '100%' }}
                            placeholder={'Search for anything on Printerval'}
                            placeholderTextColor={'gray'}
                            fontSize={17}
                            fontFamily={fonts.mainFont}
                            fontWeight={'300'}
                            selectionColor={'black'}
                            ref={inputRef}
                            blurOnSubmit={false}
                            onFocus={() => setFocus(true)}
                        />
                    </Center>

                </Box>
            </View>
            <Box flexGrow={1} flexBasis={1} >
                <ScrollView
                    style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                    // enableResetScrollToCoords={false}
                    // contentContainerStyle={{ alignItems: 'center' }}
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid
                    bounces={false}
                // stickyHeaderIndices={[0]} // khi dùng sticky header phải dùng View chứ k xài Box của native base (dở hơi thật :v )
                >
                    {/* Header */}
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
                        <SectionTitle >
                            Pick up
                        </SectionTitle>
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
                        <Row alignItems={'center'}>
                            <TextNormal ml={'20px'}
                                fontSize={20}>
                                Popular designs
                            </TextNormal>
                            <Icon as={<AntDesign name={'arrowright'} />} color={'black'} size={'20px'} ml={2} />
                        </Row>
                        <Scroll
                            horizontal contentContainerStyle={{ paddingLeft: margin.small, paddingTop: 10, paddingLeft: SCREEN_WIDTH * 0.03 }}
                            // style={{ marginTop: margin.small }}
                            showsHorizontalScrollIndicator={false}>
                            {
                                PopularCategoryConfig.map(item => <PopularCategory key={item.title}
                                    title={item.title}
                                    logo={item.logo}
                                />)
                            }
                        </Scroll>
                    </Box>

                    {/* Popular design section*/}
                    <Box mt={'25px'} w={SCREEN_WIDTH}>
                        <Row alignItems={'center'}>
                            <TextNormal ml={'20px'}
                                fontSize={20}>
                                Top sales today
                            </TextNormal>
                            <Icon as={<AntDesign name={'arrowright'} />} color={'black'} size={'20px'} ml={2} />
                        </Row>
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
const MainCategoryConfig = [
    [
        {
            title: "Clothing",
            requireImage: ImageUri.Category1,
            bg: '#76e197'
        },
        {
            title: "T-Shirts",
            requireImage: ImageUri.Category2,
            bg: '#f9a124'
        },
    ],
    [
        {
            title: "Tank Tops",
            requireImage: ImageUri.Category3,
            bg: '#fe5b79'
        },
        {
            title: "Home & Living",
            requireImage: ImageUri.Category4,
            bg: '#8aebdb'
        },
    ],
    [
        {
            title: "Caps",
            requireImage: ImageUri.Category5,
            bg: '#ffcf2d'
        },
        {
            title: "Accessories",
            requireImage: ImageUri.Category6,
            bg: '#4bc1f6'
        }
    ]
]

const PopularCategoryConfig = [
    {
        title: "Music",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/uyiir-gpewwmg-gviwx-vsgo-ferh-xwlmvx-pq011121-6180e3eg8284h.trk.png",
                color: "#F7A34A"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/hoylv-suhvohb-olyh-617i8818005dd.sqj.png",
                color: "#227694"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/utre-znk-hkyz-mxgtjsgy-royzkt-zu-krboy-vxkyrke-z-ynoxz-i-db291021-617l9i70730k1.vtm.png",
                color: "#F8D042"
            },
        ]
    },
    {
        title: "Gift",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/14/coykmaey-znk-znxkk-yzuumky-znk-znxkk-yzuumky-z-ynoxz-i-vi180322-jh2j328178l00g50k89hk39k94li1440.vtm.png",
                color: "#484572"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/sfusp-qjhhmz-xjmmz-sfusp-u-tijsu-d-cu070222-g05e7f956320d7f90e9g56c4727g8047.qoh.png",
                color: "#62B64D"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/veglipw-irkpmwl-xvmjpi-jvmirhw-x-wlmvx-g-fx230222-ie39h1f511031g7j5e2ij8j127672iej.trk.png",
                color: "#227694"
            },
        ]
    },
    {
        title: "Vintage",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/uyiir-gpewwmg-gviwx-vsgo-ferh-xwlmvx-pq011121-6180e3eg8284h.trk.png",
                color: "#F7A34A"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/hoylv-suhvohb-olyh-617i8818005dd.sqj.png",
                color: "#227694"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/utre-znk-hkyz-mxgtjsgy-royzkt-zu-krboy-vxkyrke-z-ynoxz-i-db291021-617l9i70730k1.vtm.png",
                color: "#F8D042"
            },
        ]
    },
    {
        title: "Funny",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/14/coykmaey-znk-znxkk-yzuumky-znk-znxkk-yzuumky-z-ynoxz-i-vi180322-jh2j328178l00g50k89hk39k94li1440.vtm.png",
                color: "#484572"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/sfusp-qjhhmz-xjmmz-sfusp-u-tijsu-d-cu070222-g05e7f956320d7f90e9g56c4727g8047.qoh.png",
                color: "#62B64D"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/veglipw-irkpmwl-xvmjpi-jvmirhw-x-wlmvx-g-fx230222-ie39h1f511031g7j5e2ij8j127672iej.trk.png",
                color: "#227694"
            },
        ]
    },
    {
        title: "Football",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/uyiir-gpewwmg-gviwx-vsgo-ferh-xwlmvx-pq011121-6180e3eg8284h.trk.png",
                color: "#F7A34A"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/hoylv-suhvohb-olyh-617i8818005dd.sqj.png",
                color: "#227694"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/12/utre-znk-hkyz-mxgtjsgy-royzkt-zu-krboy-vxkyrke-z-ynoxz-i-db291021-617l9i70730k1.vtm.png",
                color: "#F8D042"
            },
        ]
    },
    {
        title: "Music2",
        logo: [
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/14/coykmaey-znk-znxkk-yzuumky-znk-znxkk-yzuumky-z-ynoxz-i-vi180322-jh2j328178l00g50k89hk39k94li1440.vtm.png",
                color: "#484572"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/sfusp-qjhhmz-xjmmz-sfusp-u-tijsu-d-cu070222-g05e7f956320d7f90e9g56c4727g8047.qoh.png",
                color: "#62B64D"
            },
            {
                uri: "https://gdn.printerval.com/unsafe/fit-in/500x500/assets.printerval.com/2022/05/13/veglipw-irkpmwl-xvmjpi-jvmirhw-x-wlmvx-g-fx230222-ie39h1f511031g7j5e2ij8j127672iej.trk.png",
                color: "#227694"
            },
        ]
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