import React, { useEffect, useState, memo } from "react";
import { Box, Text, Input, Icon, Divider } from "native-base";
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native";
import { createSelector } from "@reduxjs/toolkit";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useDispatch, useSelector } from "react-redux";

const ScreenArr = [
    {
        code: "Code1",
        name: "Màn 1",
    },
    {
        code: "Code2",
        name: "Màn 2",
    },
    {
        code: "Code3",
        name: "Màn 3",
    },
    {
        code: "Code4",
        name: "Màn 4",
    },
    {
        code: "Code5",
        name: "Màn 5",
    },
    {
        code: "Code6",
        name: "Màn 6",
    }
]

const SettingScreen = () => {
    return (
        <Box flex={1} alignItems={'center'} backgroundColor={'gray.100'}>
            <Box paddingY={'20px'} paddingX={'10px'} width={'100%'} borderWidth={1}>
                <Box padding={2} borderRadius={5} backgroundColor={'#9c2d47'} width={'40%'} alignSelf={"baseline"} >
                    <Text fontSize={14} color={'white'}>Sign In/Register</Text>
                </Box>
                <Box w={"95%"} alignSelf={'center'} height={'100px'} borderWidth={1} mt={'20px'} flexDir={'row'}
                    justifyContent={"space-around"} alignItems={"center"} backgroundColor={"white"}>
                    <TouchableOpacity style={styles.button}>
                        <Icon as={<AntDesign name="team" />} size={'6'} color={'black'} />
                        <Text mt={'8px'} >User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon as={<AntDesign name="team" />} size={'6'} color={'black'} />
                        <Text mt={'8px'} >User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon as={<AntDesign name="team" />} size={'6'} color={'black'} />
                        <Text mt={'8px'} >User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon as={<AntDesign name="team" />} size={'6'} color={'black'} />
                        <Text mt={'8px'} >User</Text>
                    </TouchableOpacity>
                </Box>


            </Box>
            <Box w={'95%'} alignSelf={"center"} mt={'20px'} py={2} borderWidth={1} backgroundColor={'white'}>
                {ScreenArr.map((item, index) => (
                    <SectionNavigate key={item.code} label={item.name} code={item.code} index={index} />
                ))}
            </Box>
        </Box>
    )
}

const SectionNavigate = memo(({ label, code, params, index }) => (
    <>
        <TouchableOpacity style={styles.section} onPress={() => console.log("Pressed")}>
            <Text fontSize={14}>{label}</Text>
            <Icon as={<AntDesign name="right" />} size={"4"}></Icon>
        </TouchableOpacity>
        {index < ScreenArr.length - 1 && <Divider my={1.5} w={'95%'} alignSelf={'center'} />}
    </>
))

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        flexDirection: "row", alignItems: 'center', borderWidth: 0,
        paddingHorizontal: 15, padding: 8,
        justifyContent: "space-between"
    }
})

export default SettingScreen