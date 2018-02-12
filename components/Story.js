import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Fonts, Colors } from '../themes/';

export default class Story extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    ...Fonts.style.normal,
    color: Colors.text,
    marginHorizontal: 30,
    paddingVertical: 20,
    textAlign: 'justify',
  }
});
