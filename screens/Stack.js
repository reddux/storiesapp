import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Reader from './Reader';

const Stack = StackNavigator({
  Home: { screen: HomeScreen },
  Reader: { screen: Reader },
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
}, {
  initialRouteName: 'Home',
});