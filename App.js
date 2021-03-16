import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import SummaryScreen from './screens/SummaryScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 


export default function App() {
  const num = [3, 8, 11, 7, 5];

const num2x = num.map((a) => a * 2);

console.log(num2x); // [6, 16, 22, 14, 10]
  return (
    <View>
 <AppContainer/>
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen: SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator)
