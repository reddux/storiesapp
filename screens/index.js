import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import Reader from './Reader';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.Reader', () => Reader);
}