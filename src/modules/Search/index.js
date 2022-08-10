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
import { PrintervalLogo, BottomBorder } from "../../assets/image/Svg";

//Components
import { TextBold, TextNormal, getCustomTheme } from "../../components";

//Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { fontSize } from "../../styles/font";
import { commonStyle } from "../../styles";
import { recentMsg } from "./fakeData";


const SearchScreen = ({ marginTop }) => {
    const { colors } = getCustomTheme();
    return (
        <Box zIndex={1001}
            // borderWidth={1}
            position={'absolute'}
            top={'90px'}
            w={SCREEN_WIDTH} h={SCREEN_HEIGHT}
            px={SCREEN_WIDTH * 0.03}
            bg={'white'}>
            <TextBold fontSize={fontSize.subTitle} >
                Recent
            </TextBold>
            <Row w={'100%'} flexWrap={'wrap'}>
                {
                    recentMsg.map((item, index) => (
                        <Row
                            key={index}
                            p={'8px'}
                            px={'16px'}
                            mr={'10px'}
                            mt={'10px'}
                            borderRadius={16}
                            overflow={'hidden'}
                            bg={colors.GRAY_INPUT}>
                            <TextNormal
                                fontSize={fontSize.normal}>{item}</TextNormal>
                        </Row>
                    ))
                }
            </Row>
            <TextBold fontSize={fontSize.subTitle} mt={'25px'}>
                Trending
            </TextBold>
            <Row w={'100%'} flexWrap={'wrap'}>
                {
                    recentMsg.map((item, index) => (
                        <Row
                            key={index}
                            p={'8px'}
                            px={'16px'}
                            mr={'10px'}
                            mt={'10px'}
                            borderRadius={16}
                            overflow={'hidden'}
                            bg={colors.GRAY_INPUT}>
                            <TextNormal
                                fontSize={fontSize.normal}>{item}</TextNormal>
                        </Row>
                    ))
                }
            </Row>
        </Box>
    )
}

export default memo(SearchScreen)