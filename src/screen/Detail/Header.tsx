import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../resources/images';


const Header = (props: any) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={()=>props.props.navigation.goBack(null)} style={styles.backView}>
                <Image style={styles.backArrow} source={images.backArrow} resizeMode={"contain"} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.backView}>
                    <Image style={styles.backArrow} source={images.heartIcon} resizeMode={"contain"} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backView,{marginLeft:10}]}>
                    <Image style={styles.backArrow} source={images.download} resizeMode={"contain"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    backView: {
        backgroundColor: "rgba(0,0,0,0.1)",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 20
    },
    backArrow: {
        height: 20,
        width: 20
    }
})
export default Header;