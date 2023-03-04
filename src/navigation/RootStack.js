import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail/indes';
import Cart from '../screen/Cart';
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, headerBackTitleVisible: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="detail" component={Detail} />
            <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
    )
}
export default RootStack;
