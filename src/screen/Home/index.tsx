import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { images } from '../../resources/images';
import styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { dataChange } from '../../redux/Actions/action';

const Home = (props: any) => {

    const dispatch = useDispatch();
    const data = useSelector((store: any) => store.reducer.data);
    const [productData, setProductData] = useState(data == undefined ? [] : data)
    const [duplicateData, setDuplicateData] = useState(data == undefined ? [] : data)
    const [cartCount] = useState(useSelector((store: any) => store.reducer.cartCount))
    useEffect(() => {
            getProductData();
    }, [])
    const getProductData = () => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then(response => response.json())
            .then(json => {
                setProductData(json)
                setDuplicateData(json)
                dispatch(dataChange(json))
            })
            .catch(error => {
                console.error(error);
            });
    }
    const itemClick = (item: any) => {
        props.navigation.navigate("detail", { detailData: item })
    }
    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => itemClick(item)} style={styles.renderView}>
                <Image style={styles.imageView} source={{ uri: item.image_link }} resizeMode={"contain"} />
                <Text style={styles.txtBrand}>{item.product_type}</Text>
                <Text numberOfLines={1} style={styles.txtName}>{item.name}</Text>
                <Text style={styles.txtPrice}>{"$" + item.price}</Text>
                {item.rating > 4.3&&
                    <ImageBackground style={styles.imgDisc} source={images.saveIcon}>
                        <Text style={styles.txtDiscount}>{"-5%"}</Text>
                    </ImageBackground>
                }
            </TouchableOpacity>
        )
    }
    function filterData(obj: any, serachText: string) {
        return obj.name.toLowerCase().includes(serachText) || obj.brand.toLowerCase().includes(serachText) || obj.price.includes(serachText) || obj.category?.toLowerCase().includes(serachText)
    }
    function onChangeText(value: string) {
        if (value.trim().length != 0) {
            const newArr = productData.filter((obj: any) => filterData(obj, value.toLowerCase().trim()));
            setDuplicateData(newArr)
        }
        else {
            setDuplicateData(productData)
        }
    }
    return (
        <View style={styles.mainView}>
            <View style={{ flexDirection: "row", alignItems: "center", margin: 14 }}>
                <View style={styles.serachView}>
                    <Image style={styles.imgSerach} source={images.serachIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder={"Serach"}
                        onChangeText={onChangeText}
                        placeholderTextColor={"#8E8E93"}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("cart")}
                    style={{ flex: 0.1, marginLeft: 10 }}>
                    <Image style={styles.imgCart} source={images.cartIcon} resizeMode={"contain"} />
                    <View style={styles.viewCount}>
                        <Text style={styles.txtCount}>{useSelector((store: any) => store.reducer.cartCount)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={duplicateData}
                numColumns={2}
                style={{ margin: 20 }}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Home;