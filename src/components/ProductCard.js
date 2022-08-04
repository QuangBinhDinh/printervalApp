import React, { useEffect, useState, memo } from "react";
import { Box, Center, Row, Text, Input, Icon, Image, Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import { getCustomTheme } from "./hooks/getCustomTheme";
import { SCREEN_WIDTH } from "../util";



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