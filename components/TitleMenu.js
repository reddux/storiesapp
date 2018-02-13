import React from 'react';
import { Toolbar } from 'react-native-material-ui';

export default class TitleMenu extends React.Component {
  render() {
    return (
      <Toolbar
        leftElement="menu"
        centerElement="Popular"
      />
    );
  }
}