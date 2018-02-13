import React from 'react';
import { AppLoading } from 'expo';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import HomeScreen from './screens/HomeScreen';
import RootStack from './screens/';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

const uiTheme = {
  palette: {
    primaryColor: COLOR.black,
  },
  toolbar: {
    container: {
      height: 50,
      marginTop: 20
    },
  },
};

export default class App extends React.Component {

  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [],
        fonts: [
          { 'Bookerly-Regular': require('./assets/fonts/Bookerly-Regular.ttf') },
          { 'Bookerly-Bold': require('./assets/fonts/Bookerly-Bold.ttf') },
          { 'Bookerly-RegularItalic': require('./assets/fonts/Bookerly-RegularItalic.ttf') },
          { 'Roboto': require('./assets/fonts/Roboto-Regular.ttf') },
          { 'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf') },
          { 'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <ThemeProvider uiTheme={uiTheme}>
          <RootStack/>
        </ThemeProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}