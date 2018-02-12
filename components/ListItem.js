import React from 'react';
import { Alert, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Fonts, Colors } from '../themes/';
import Reader from '../screens/Reader';

export default class ListItems extends React.Component {

  render() {

    // Strip out [ ] tags
    let post_title = this.props.title;
    post_title = post_title.replace(/(\[.*?\])\s/g, '');

    return (
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{post_title}</Text>
          <View style={styles.metaData}>
            <Text style={styles.metaDataText}>{this.props.top_comment_author}</Text>
            <Text style={styles.metaDataText}>5 min read</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 16,
  },
  listItemTitle: {
    ...Fonts.style.normal,
    color: Colors.text,
    paddingHorizontal: 18,
    letterSpacing: 0.1,
  },
  metaData: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  metaDataText: {
    ...Fonts.style.h3,
    color: Colors.text,
    marginRight: 10,
    marginTop: 8
  }
});
