import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Fonts, Colors } from '../themes/';
import Synopsis from '../components/Synopsis';
import Story from '../components/Story';
import Metadata from '../components/Metadata';

export default class Reader extends React.Component {
  static navigationOptions = {
    //header: null,
  }

  render() {
    const { params } = this.props.navigation.state;

    // Strip out [ ] tags
    let post_title = params.post_title;
    post_title = post_title.replace(/(\[.*?\])\s/g, '');

    return (
      <View style={styles.container}>
        <ScrollView>
          <Synopsis text={post_title} />
          <Metadata author={params.top_comment_author} readTime={params.read_time} />
          <Story text={params.top_comment} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});