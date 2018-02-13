import React from 'react'
import { StackNavigator } from 'react-navigation';
import { Fonts, Colors } from '../themes/';
import HomeScreen from './HomeScreen';
import Reader from './Reader';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Reader: {
      screen: Reader,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: Colors.text,
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  }
);

export default RootStack;