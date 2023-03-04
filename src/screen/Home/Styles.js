import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window")
const NUM_COLUMNS = 2
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    renderView: {
        flex: 1,
        margin: 5,

    },
    imageView: {
        height: 200,
        width: '100%',
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    txtBrand: {
        fontSize: 13,
        fontWeight: "400",
        color: "black",
        opacity: 0.5

    },
    txtName: {
        fontSize: 13,
        fontWeight: "600",
        color: "black",
        opacity: 1,
        marginVertical: 5,


    },
    txtPrice: {
        fontSize: 13,
        fontWeight: "400",
        color: "black",
        opacity: 1,
    },
    serachView: {
        backgroundColor: "#7676801F",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        flex: 0.9
    },
    imgSerach: { height: 14, width: 14, tintColor: "#979797", marginHorizontal: 7 },
    textInput: {
        color: "black",
        flex: 1
    },
    imgCart: {
        height: 30,
        width: 30
    },
    imgDisc: {
        height: 35, width: 35,
        position: "absolute", top: 5, left: 10,
        alignItems: "center", justifyContent: "center",

    },
    txtDiscount: {
        fontSize: 10,
        fontWeight: "600",
        color: "white",
    },
    viewCount: {
       backgroundColor: "orange",
        borderRadius: 10, alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        right:-5,
        top:5,
        paddingHorizontal:5
    },
    txtCount:{
        fontSize:10,
        fontWeight:"600",
        color:"white"
    },


})
export default styles;