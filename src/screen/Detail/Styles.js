import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window")
const NUM_COLUMNS = 2
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    imgBack: {
        height: height / 2.3,
        width: '100%',
    },
    txtName: {
        fontSize: 16,
        fontWeight: "600",
        color: "black"
    },
    txtPrice: {
        fontSize: 16,
        fontWeight: "400",
        color: "grey"
    },
    imgStar: {
        height: 15,
        width: 15,
        marginLeft: 30
    },
    txtRate: {
        fontSize: 16,
        fontWeight: "400",
        color: "black",
        marginLeft: 10
    },
    txtdesc: {
        fontSize: 14,
        fontWeight: "400",
        color: "black",
    },
    btnAddCart: {
        backgroundColor: "black",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:20
    },
    txtAddCart: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        margin: 15
    },
    txtSelect: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        marginVertical: 10
    },
    renderColor: {
        height: 30, width: 30, borderRadius: 30,
        marginRight: 10,
        alignItems:"center",
        justifyContent:"center"
    },
    selectedView:{ height: 10, width: 10, borderRadius: 10, backgroundColor: "white" }
})
export default styles