import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../resources/images';
import Header from './Header';
import styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { addCartCount, addCartData } from '../../redux/Actions/action';
import Toast from 'react-native-simple-toast';

const Detail = (props: any) => {
    const [detailData] = useState(props.route.params.detailData)
    const [product_colors] = useState(props.route.params.detailData.product_colors)
    const [seletedItem, setSelectedItem] = useState({ colour_name: "", hex_value: "" })
    const cartData = useSelector((store: any) => store.reducer.cartData);
    const [cartCount, setCartCount] = useState(useSelector((store: any) => store.reducer.cartCount))
    const dispatch = useDispatch();

    const renderColor = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedItem(item)}
                style={[styles.renderColor, { backgroundColor: item.hex_value }]}>
                {seletedItem != null && seletedItem?.hex_value == item.hex_value && <View style={styles.selectedView} />}
            </TouchableOpacity>
        )
    }
    const onAddCart = () => {
        if(detailData.category=="cream"&&detailData.product_type=="foundation"&&detailData.rating<3)
        {
            Toast.show("This product rating less than 3 and this is cream foundation product that way user not able add this product.",Toast.LONG)
            return
        }
        let newArr = [...cartData]
        let index = newArr.findIndex(obj => obj.id === detailData.id);
        if (index < 0) {
            newArr.push(
                {
                    ...detailData,
                    qty: 1
                }
            )
            dispatch(addCartCount(cartCount + 1))
            setCartCount(cartCount + 1)
            Toast.show("Product successfully add in cart.", Toast.SHORT)
        }
        else {
            newArr[index].qty = newArr[index].qty + 1
            Toast.show("Product quantity change sucessfully in cart", Toast.SHORT)

        }
        dispatch(addCartData(newArr))

      
    }
    return (
        <ScrollView style={styles.mainView}>
            <Header props={props} />
            <ImageBackground style={styles.imgBack} source={{ uri: detailData.image_link }} />
            <View style={{ padding: 20, backgroundColor: "rgba(0,0,0,0.05)", flex: 1 }}>
                <Text style={styles.txtName}>{detailData.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.txtPrice}>{"$" + detailData.price}</Text>
                    {detailData.rating != null && <Image source={images.star} style={styles.imgStar} resizeMode={"contain"} />}
                    {detailData.rating != null && <Text style={styles.txtRate}>{detailData.rating}</Text>}
                </View>
                {product_colors.length > 0 && <Text style={styles.txtSelect}>{"Select Color : " + seletedItem?.colour_name}</Text>}
                <FlatList
                    data={product_colors}
                    horizontal
                    renderItem={renderColor}
                />
                <Text style={[styles.txtName, { marginVertical: 5 }]}>Description:</Text>
                <Text style={styles.txtdesc}>{detailData.description}</Text>

                <TouchableOpacity onPress={() => onAddCart()} style={styles.btnAddCart}>
                    <Text style={styles.txtAddCart}>{"Add to Cart"}</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
export default Detail;