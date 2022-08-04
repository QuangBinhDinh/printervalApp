import React, { useEffect, useState, memo } from "react";
import { Box, Center, Row, Text, Input, Icon, Image, Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import { getCustomTheme } from "../../components";
import { SCREEN_WIDTH } from "../../util";

export const MainCategory = memo(({ title, requireImage, screen }) => {
    const { colors, fontConfig, fonts } = getCustomTheme();
    return (
        <TouchableOpacity style={{ width: '50%', aspectRatio: 1, padding: 2 }}>
            <ImageBackground style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} source={requireImage}>
                <Text fontSize={25} fontFamily={fonts.bigCategory} color={'white'} textAlign={'center'}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
})


export const PopularCategory = memo(({ title, imageUri, color }) => {
    const { colors, fonts } = getCustomTheme();
    return (

        <TouchableOpacity style={{//note: element co aspectRatio phai co child ben trong 
            width: '50%', aspectRatio: 1, padding: 2,
        }}>

            <Box flex={1} backgroundColor={color} justifyContent={'center'} alignItems={'center'}>
                {/* <LinearGradient
                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    colors={['#00000000', '#000000']}
                    start={{ x: 0, y: 0.3 }}
                    end={{ x: 0, y: 1 }}> */}
                <Image style={{ width: '50%', aspectRatio: 1 }} source={{ uri: imageUri }} />
                {/* </LinearGradient> */}

            </Box>
        </TouchableOpacity>
        // {/* <Text fontSize={16} fontFamily={fonts.bigCategory} textAlign={'center'}>{title}</Text> */}

    )
})

export const ProductCard = memo(({ containerStyle, title, price, originPrice }) => {
    const { colors, fonts } = getCustomTheme();

    return (
        //note: element co aspectRatio phai co child ben trong 
        <TouchableOpacity style={{
            width: '50%', aspectRatio: 0.7, padding: 2, borderWidth: 0.5, borderColor: colors.LIGHT_BORDER,
            ...containerStyle
        }}>
            <Box flex={1}>
                <Box flex={7} p={'2px'}>
                    <Image style={{ flex: 1 }} source={{ uri: 'https://liveview.printerval.com/image/630x630/t-shirts-men-heavyweight-t-shirt,black,sprv1-1038787489,2d2d2d.jpeg' }} />
                    <Center borderRadius={30} position={'absolute'} backgroundColor={colors.SALEOFF_COLOR}
                        left={'7px'} top={'10px'} w={'25%'} style={{ aspectRatio: 1 }} >
                        <Text fontSize={14} color={'white'} lineHeight={18} textAlign={'center'}>30% OFF</Text>
                    </Center>
                </Box>
                <Box flex={3} justifyContent={'space-between'} px={'4px'} >
                    <Text fontSize={14} fontWeight={'bold'} lineHeight={18} numberOfLines={2} mt={'5px'}>{title}</Text>
                    <Row alignItems={'center'}>
                        <Text fontSize={14} color={colors.PRICE_TAG_COLOR}>{price}</Text>
                        <Text fontSize={12} color={colors.PRICE_ORIGIN_COLOR} textDecorationLine={'line-through'} ml={'5px'}>{originPrice}</Text>
                    </Row>
                </Box>
            </Box>
        </TouchableOpacity>
    )
})

export const RecentlyView = memo(({ containerStyle, title, price, originPrice }) => {
    const { colors } = getCustomTheme();

    return (
        <TouchableOpacity style={{
            width: SCREEN_WIDTH / 3.5, aspectRatio: 0.7, marginLeft: 15,
            ...containerStyle
        }}>
            <Box flex={1}>
                <Box flex={7} p={'2px'}>
                    <Image style={{ flex: 1 }} source={{ uri: 'https://liveview.printerval.com/image/630x630/t-shirts-men-heavyweight-t-shirt,black,sprv1-1038787489,2d2d2d.jpeg' }} />
                    {/* <Center borderRadius={30} position={'absolute'} backgroundColor={colors.SALEOFF_COLOR}
                        left={'7px'} top={'10px'} w={'25%'} style={{ aspectRatio: 1 }} >
                        <Text fontSize={14} color={'white'} lineHeight={18} textAlign={'center'}>30% OFF</Text>
                    </Center> */}
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