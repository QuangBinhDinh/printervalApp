import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native";
import { createSelector } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle={{ alignItems: 'center' }}
            showsVerticalScrollIndicator={false}
            extraHeight={20}
            enableOnAndroid>
            <Input mt={'100px'} borderWidth={1} h={'50px'} w={'80%'} fontSize={14} />
            <Input mt={'200px'} borderWidth={1} h={'50px'} w={'80%'} fontSize={14} />
            <Input mt={'200px'} borderWidth={1} h={'50px'} w={'80%'} fontSize={14} />
            <Input mt={'200px'} borderWidth={1} h={'50px'} w={'80%'} fontSize={14} />
        </KeyboardAwareScrollView>


    )
}

export default HomeScreen