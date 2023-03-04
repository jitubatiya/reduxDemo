/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import configStore from './src/redux/store/store';
const getStore = configStore()

const App = () => {
  return (
    <Provider store={getStore}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}
export default App