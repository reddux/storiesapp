import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Fonts, Colors } from '../themes/';

export default class Synopsis extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SYNOPSIS</Text>
        <Text style={styles.body}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.text,
  },
  heading: {
    ...Fonts.style.h3,
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: 0.1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  body: {
    ...Fonts.style.h1,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 30,
  }

});
