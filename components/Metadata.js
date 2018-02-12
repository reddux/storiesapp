import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Fonts, Colors } from '../themes/';

export default class Metadata extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{this.props.author}</Text>
        <Text style={styles.body}>{this.props.readTime} min read</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  body: {
    ...Fonts.style.h3,
    color: Colors.text,
    paddingHorizontal: 8,
    paddingVertical: 8,
  }
});
