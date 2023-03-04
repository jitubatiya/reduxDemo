import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addCartCount, addCartData } from '../../redux/Actions/action';
import styles from './Styles';
import Toast from 'react-native-simple-toast';

const Cart = (props: any) => {
    const cartData = useSelector((store: any) => store.reducer.cartData);
    const dispatch = useDispatch();
    const cartCount = useSelector((store: any) => store.reducer.cartCount);
    const [totalAmt, setTotalAmount] = useState(0)
    const [withDiscountTotalAmt, setwithDiscountTotalAmt] = useState(0)
    const [deliveryCharge, setDeliveryCharge] = useState(0)
    const [disount, setDiscount] = useState(0)
    const [deliveryMethod, setDeliveryMethod] = useState("Home Delivery")
    const [isDiscount, setIsDiscount] = useState(false)
    useEffect(() => {
        calculateTotal
        calculateDelivery
    }, [cartData])

    const calculateDelivery = useMemo(() => {
        if (deliveryMethod == "Home Delivery") {
            let total = 0;
            for (let i = 0; i < cartData.length; i++) {
                total += ((cartData[i].price * cartData[i].qty) * 1) / 100
            }
            setDeliveryCharge(total)
        }
        else
            setDeliveryCharge(0)
    }, [cartData, deliveryMethod])
    const calculateTotal = useMemo(() => {
        let total = 0, discount_count_product = 0, totalWithDiscount = 0, totalDiscount = 0;
        for (let i = 0; i < cartData.length; i++) {
            let discount = 0;
            if (cartData[i].rating >= 4.3) {
                discount = Math.round((cartData[i].price * cartData[i].qty) * 5) / 100
                totalDiscount += Math.round((cartData[i].price * cartData[i].qty) * 5) / 100
            }


            total += (cartData[i].price * cartData[i].qty)
            totalWithDiscount += (cartData[i].price * cartData[i].qty) - discount
            if (cartData[i].rating >= 4.3)
                discount_count_product += 1
        }
        discount_count_product > 2 ? setIsDiscount(true) : setIsDiscount(false)
        setTotalAmount(total)
        setwithDiscountTotalAmt(totalWithDiscount)
        setDiscount(totalDiscount)

    }, [cartData])
    function clickPlus(sign: string, item: any, index: any) {
        let newArr = [...cartData]
        if (sign == "-") {
            if (item.qty == 1) {
                newArr.splice(index, 1)
                dispatch(addCartCount(cartCount - 1))
            }
            else {
                newArr[index].qty = newArr[index].qty - 1
            }
        }
        else {
            newArr[index].qty = newArr[index].qty + 1
        }
        dispatch(addCartData(newArr))
    }
    const renderItem = ({ item, index }: any) => {
        let discount = 0;
        if (isDiscount && item.rating >= 4.3)
            discount = Math.round((item.price * item.qty) * 5) / 100
        return (
            <View style={styles.renderView}>
                <Image style={styles.imgProduct} source={{ uri: item.image_link }} />
                <View style={{ marginLeft: 10, flex: 0.9 }}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <View style={styles.qtyView}>
                        <TouchableOpacity onPress={() => clickPlus("-", item, index)} style={styles.plusView}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtqty}>{item.qty}</Text>
                        <TouchableOpacity onPress={() => clickPlus("+", item, index)} style={[styles.plusView, { marginLeft: 20 }]}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtPrice}>{"Price : " + item.price}</Text>
                </View>
                <View>
                    <Text style={{ color: "black" }}>{"Total Price"}</Text>
                    {(item.rating >= 4.3 && isDiscount) ?
                        <Text style={[styles.txtTotalPrice, { textDecorationStyle: 'solid', textDecorationLine: 'line-through' }]}>{Math.round(item.price * item.qty)}</Text> :
                        <Text style={[styles.txtTotalPrice, {}]}>{Math.round(item.price * item.qty)}</Text>
                    }
                    {item.rating >= 4.3 && isDiscount && <Text style={[styles.txtTotalPrice, {}]}>{" -5% discount \n " + Math.round((item.price * item.qty) - discount)}</Text>}
                </View>
            </View>
        )
    }
    const onPlaceOrder = () => {
        dispatch(addCartCount(0))
        dispatch(addCartData([]))
        Toast.show("Oeder Placed Sucessfully.", Toast.LONG)

    }
    const emptyView = () => {
        return (
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Text style={{ fontSize: 18, color: "black", fontWeight: "800" }}>No Data Found</Text>
            </View>
        )
    }
    return (
        <View style={styles.mainView}>
            <FlatList
                data={useSelector((store: any) => store.reducer.cartData)}
                renderItem={renderItem}
                style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 250 }}
                ListEmptyComponent={emptyView}
                showsVerticalScrollIndicator={false}
            />
            {cartData.length != 0 &&
                <View style={styles.bottomView}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "600", marginVertical: 10 }}>{"Choose Delivery Method"}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => setDeliveryMethod("Home Delivery")}
                                style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.roundView}  >
                                    {deliveryMethod == "Home Delivery" && <View style={styles.seletedView} />}
                                </View>
                                <Text style={styles.txtdelivey}>{"Home Delivery"}</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
                                    onPress={() => setDeliveryMethod("Click and Collect")}
                                >
                                    <View style={styles.roundView}  >
                                        {deliveryMethod == "Click and Collect" && <View style={styles.seletedView} />}
                                    </View>
                                    <Text style={styles.txtdelivey}>{"Click and Collect"}</Text>

                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={styles.txtName}>{"Total Price"}</Text>
                        <Text style={styles.txtName}>{Math.round(totalAmt)}</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={styles.txtName}>{"Delivey Charges"}</Text>
                        <Text style={styles.txtName}>{"+ " + Math.round(deliveryCharge)}</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={styles.txtName}>{"Total Discount"}</Text>
                        <Text style={styles.txtName}>{isDiscount ? "- " + Math.round(disount) : "- 0"}</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: "grey", marginVertical: 5 }} />
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={styles.txtName}>{"Grand Total"}</Text>
                        <Text style={styles.txtName}>{Math.round((Math.round(totalAmt) + Math.round(deliveryCharge)) - Math.round(disount))}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onPlaceOrder()} style={styles.btnAddCart}>
                        <Text style={styles.txtAddCart}>{"Place Order"}</Text>
                    </TouchableOpacity>
                </View>}
        </View>
    )
}
export default Cart;