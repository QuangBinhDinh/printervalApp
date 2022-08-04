//UI
import React, { useEffect, useState, memo, createRef } from "react";
import { Box, Text, Input, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity, ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "../../components/Swiper";
import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import { getCustomTheme } from "../../components";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView as Scroll } from "react-native-gesture-handler";

//Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
class FacebookTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemWidth: []
        }
        this.scrollRef = createRef();
    }
    componentDidMount = () => {
        const { childRef } = this.props
        childRef(this)
    }
    setItemWidth(id, width) {
        this.setState(state => ({ ...state, itemWidth: [...state.itemWidth, { id, width }] }))
    }
    getItemWidth(id) {// lấy width tintColor ở dưới mỗi tabBar để render 
        const arr = this.state.itemWidth;
        const button = arr.filter(item => item.id == id);
        return button[0]?.width ?? 0
    }

    scrollToTabBar(id) {
        const coordinate = this.state.itemWidth.slice(0, id).reduce((prev, next) => prev + next.width, 0);
        console.log("X: " + coordinate);
        this.scrollRef.current.scrollTo({ x: coordinate, y: 0, animated: true });
        this.props.goToPage(id);
    }
    userScrollToTabBar(id) {
        const coordinate = this.state.itemWidth.slice(0, id).reduce((prev, next) => prev + next.width, 0);
        console.log("X: " + coordinate);
        console.log(this.state.itemWidth);
        this.scrollRef.current.scrollTo({ x: coordinate, y: 0, animated: true });
        this.props.goToPage(id);
    }
    render() {
        return <View style={[styles.tabs, this.props.style,]}>
            <Scroll
                style={{ flex: 1 }}
                showsHorizontalScrollIndicator={false}
                //onScroll={e => console.log(e.nativeEvent.contentOffset)}
                horizontal
                ref={this.scrollRef}>
                {this.props.config.map((item, i) => <TouchableOpacity
                    key={item.id}
                    onPress={() => {

                        this.scrollToTabBar(i);
                    }}
                    // onPress={() => console.log(this.state.itemWidth)}
                    style={styles.tab}
                    onLayout={e => this.setItemWidth(i, e.nativeEvent.layout.width)}>

                    <Text fontWeight={'600'} color={item.color}> {item.title}</Text>
                    {
                        this.props.activeTab == i && <Box
                            w={this.getItemWidth(i)}
                            h={1}
                            bg={item.color}
                            position={'absolute'}
                            bottom={0}
                        />
                    }

                </TouchableOpacity>)}
            </Scroll>
        </View>
    }
}
export default FacebookTabBar

const TabButton = memo(({ item, i, goToPage, active }) => {
    const [tintWidth, setWidth] = useState(0);
    return (
        <TouchableOpacity
            key={item.title}
            onPress={() => goToPage(i)}
            style={styles.tab}
            onLayout={e => setWidth(e.nativeEvent.layout.width)}>
            <Text fontWeight={'600'} color={item.color}> {item.title}</Text>
            {active == i && <Box
                w={tintWidth}
                h={1}
                bg={item.color}
                position={'absolute'}
                bottom={0}
            />}

        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    tabs: {
        width: SCREEN_WIDTH,
        height: 50,
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1
    },
    tab: {
        paddingHorizontal: 15,
        justifyContent: 'center', alignItems: 'center',

    },
});