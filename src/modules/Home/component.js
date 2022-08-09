import React, { useEffect, useState, memo } from "react";
import { Box, Center, Row, Text, Input, Icon, Image, Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from 'react-native-neomorph-shadows';

import { getCustomTheme, TextBold, DarkenView, TextNormal } from "../../components";
import { SCREEN_WIDTH } from "../../util";
import { margin, commonStyle } from "../../styles";
import { fontSize } from "../../styles/font";

const SectionTitle = ({ children, style, textStyle }) => (
    <Row alignItems={'center'} ml={'5%'} {...style}>
        <TextNormal fontSize={fontSize.sectionTitle} {...textStyle}>{children}</TextNormal>
        <Icon as={<AntDesign name={'arrowright'} />} color={'black'} size={'20px'} ml={2} />
    </Row>
)

const MainCategory = memo(({ title, requireImage, bg, screen, style, index }) => {
    // const getPaddingX = () => {
    //     if (index % 2 == 0) return { paddingLeft: 0 }
    //     else return { paddingRight: 0 }
    // }
    // const getPaddingY = () => {
    //     if (index <= 1) return { paddingTop: 4 }
    //     else return {}
    // }
    return (
        <TouchableOpacity style={{
            width: SCREEN_WIDTH * 0.455, height: 140,
            ...commonStyle.shadow
        }}>
            <Box flex={1}
                borderRadius={10}
                overflow={'hidden'}>
                <ImageBackground
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                    source={{ uri: requireImage }} >
                    <DarkenView style={{ flex: 1, justifyContent: 'flex-end' }}
                        opacity={0.2} >
                        <TextBold
                            fontSize={fontSize.subTitlePx}
                            color={'white'}
                            ml={'10px'}
                            mb={1} >
                            {title}
                        </TextBold>
                    </DarkenView>
                </ImageBackground>
            </Box>

        </TouchableOpacity>
    )
})

const PopularCategory = memo(({ title, imageUri, logo }) => {
    const { colors, fonts } = getCustomTheme();
    return (
        <TouchableOpacity style={{//note: element co aspectRatio phai co child ben trong 
            marginRight: SCREEN_WIDTH * 0.03, overflow: 'hidden',
        }}>
            <Row w={SCREEN_WIDTH * 0.6} h={140} borderRadius={8} overflow={'hidden'} >
                <Center flex={2.5} bg={logo[0]?.color}>
                    <Image
                        style={{ width: '60%', height: '60%' }}
                        source={{ uri: logo[0].uri }}
                        resizeMode={'contain'}
                    />
                </Center>
                <Box flex={1}>
                    <Center flex={1} bg={logo[1]?.color} >
                        <Image
                            style={{ width: '80%', height: '80%' }}
                            source={{ uri: logo[1].uri }}
                            resizeMode={'contain'}
                        />
                    </Center>
                    <Center flex={1} bg={logo[2]?.color} >
                        <Image
                            style={{ width: '80%', height: '80%' }}
                            source={{ uri: logo[2].uri }}
                            resizeMode={'contain'}
                        />
                    </Center>
                </Box>
            </Row>
            <TextNormal
                fontSize={fontSize.subTitlePx}
                // color={'black'}
                mt={'4px'}
                ml={2}
            >
                {title}
            </TextNormal>
        </TouchableOpacity>
    )
})

const ProductCard = memo(({ containerStyle, title, price, originPrice }) => {
    const { colors, fonts } = getCustomTheme();

    return (
        //note: element co aspectRatio phai co child ben trong 
        <TouchableOpacity style={{
            width: SCREEN_WIDTH * 0.3, marginRight: SCREEN_WIDTH * 0.03, backgroundColor: 'white',
            ...containerStyle
        }}>
            <Box w={'100%'} h={'120px'} p={margin.halfSmallPx}>
                <Image
                    resizeMode={'contain'}
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: 'https://liveview.printerval.com/image/630x630/t-shirts-men-heavyweight-t-shirt,black,sprv1-1038787489,2d2d2d.jpeg' }} />
            </Box>
            <Box justifyContent={'space-between'} pt={'4px'} px={'4px'}>
                <TextNormal numberOfLines={2} lineHeight={'18px'} fontSize={fontSize.detailTitlePx}>{title}</TextNormal>
                <Row alignItems={'center'} mt={'10px'}>
                    <TextNormal fontSize={fontSize.detailTitlePx} color={colors.PRICE_TAG_COLOR}>{price}</TextNormal>
                    <Text fontSize={12} color={colors.PRICE_ORIGIN_COLOR} textDecorationLine={'line-through'} ml={'5px'}>{originPrice}</Text>
                </Row>
            </Box>

        </TouchableOpacity>
    )
})

const RecentlyView = memo(({ containerStyle, title, price, originPrice }) => {
    const { colors } = getCustomTheme();

    return (
        <TouchableOpacity style={{
            width: SCREEN_WIDTH / 3.5, aspectRatio: 0.7, marginLeft: 15,
            ...containerStyle
        }}>
            <Box flex={1}>
                <Box flex={7} p={'2px'}>
                    <Image style={{ flex: 1 }} source={{ uri: 'https://liveview.printerval.com/image/630x630/t-shirts-men-heavyweight-t-shirt,black,sprv1-1038787489,2d2d2d.jpeg' }} />
                </Box>
                <Box flex={3} justifyContent={'space-between'} px={'4px'} >
                    <Text fontSize={12} fontWeight={'bold'} lineHeight={16} numberOfLines={1} mt={'5px'}>{title}</Text>
                    <Row alignItems={'center'}>
                        <Text fontSize={12} color={colors.PRICE_TAG_COLOR}>{price}</Text>
                        <Text fontSize={11} color={colors.PRICE_ORIGIN_COLOR} textDecorationLine={'line-through'} ml={'5px'}>{originPrice}</Text>
                    </Row>
                </Box>
            </Box>
        </TouchableOpacity>
    )
})
export { SectionTitle, MainCategory, ProductCard, PopularCategory, RecentlyView }
{/* <LinearGradient
                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    colors={['#00000000', '#000000']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}> */}