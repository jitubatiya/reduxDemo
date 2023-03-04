import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    plusView: {
        height: 35, width: 35,
        backgroundColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25
    },
    txtPlus: {
        fontWeight: "600",
        color: "white",
        fontSize: 12
    },
    txtqty: {
        fontWeight: "600",
        color: "black",
        fontSize: 15,
        marginLeft: 20
    },
    renderView: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
    imgProduct: { height: 120, width: 90, borderWidth: 1, borderColor: "grey", borderRadius: 20 },
    txtName: { color: "black", fontWeight: "600", fontSize: 14 },
    txtPrice: {
        color: "black", fontWeight: "500", fontSize: 13, marginVertical: 5
    },
    qtyView: { flexDirection: "row", alignItems: "center", marginTop: 10 },
    bottomView: {
        position: "absolute", bottom: 30,
        width: width - 20,
        marginHorizontal: 10
    },
    btnAddCart: {
        backgroundColor: "black",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20
    },
    txtAddCart: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        margin: 15
    },
    roundView:{
        height: 20, width: 20, backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 20, alignItems: "center",
        justifyContent: "center"
    },
    seletedView:{ height: 10, width: 10, backgroundColor: 'white', borderRadius: 20 },
    txtdelivey:{
        fontSize:12,
        fontWeight:"400",
        color:"black",
        marginLeft:6
    },
    txtTotalPrice:{ color: "black", textAlign: "center",  }
})
export default styles