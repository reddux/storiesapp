import React from 'react';
import { Navigator, NativeModules, StatusBar } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { Alert, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';
import { Fonts, Colors } from '../themes/';
import ListItem from '../components/ListItem';
import Firebase from '../config/Firebase';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _data: null,
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      lastRef: null
    };
  }

  componentDidMount() {
    this._fetchStories();
  }

  _fetchStories = (ref, count) => {
    this.setState({
      refreshing: true
    });
    Firebase.database().ref('writingprompts/')
      .orderByKey()
      .limitToLast(5)
      .on('value', (dataSnapshot) => {
        var posts = [];
        dataSnapshot.forEach((child) => {
          posts.push({
            post_title: child.val().post_title,
            top_comment_author: child.val().top_comment_author,
            _key: child.key
          });
        });

      let arrayOfKeys = posts.reverse();
      let lastRef = arrayOfKeys[arrayOfKeys.length - 1];

      this.setState({
        refreshing: false,
        _data: arrayOfKeys,
        lastRef: lastRef._key
      });
    });
  }

  _fetchMore = () => {
    Firebase.database().ref('writingprompts/')
      .orderByKey()
      .endAt(this.state.lastRef)
      .limitToLast(6)
      .on('value', (dataSnapshot) => {
        var posts = [];
        dataSnapshot.forEach((child) => {
          posts.push({
            post_title: child.val().post_title,
            top_comment_author: child.val().top_comment_author,
            _key: child.key
          });
        });

        let arrayOfKeys = posts.reverse().slice(1);
        let lastRef = arrayOfKeys[arrayOfKeys.length - 1];

        this.setState({
          refreshing: false,
          _data: this.state._data.concat(arrayOfKeys),
          lastRef: lastRef._key
        });
      });
  }

  _readStory() {
    Alert.alert('Touched');
  }

  _renderItem(post) {
    return (
      <TouchableHighlight
        onPress={this._readStory}
        underlayColor='black'
      >
        <ListItem title={post.item.post_title} top_comment_author={post.item.top_comment_author}/>
      </TouchableHighlight>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          centerElement="Popular"
        />
        <FlatList
          enableEmptySections={true}
          refreshing={this.state.refreshing}
          onRefresh={() => this._fetchStories()}
          data={this.state._data}
          onEndReached={() => this._fetchMore()}
          onEndReachedThreshold={0.5}
          renderItem={this._renderItem.bind(this)}
          keyExtractor={item => item._key}
          style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});