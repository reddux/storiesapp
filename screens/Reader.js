import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Fonts, Colors } from '../themes/';
import Synopsis from '../components/Synopsis';
import Story from '../components/Story';
import Metadata from '../components/Metadata';

export default class Reader extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Synopsis text="Alien invaders invade our Solar System. As the armies of the  world panic or ready for war, the  continent of Australia simply takes off on engines and flies off to meet them." />
          <Metadata author="Andy" readTime="5" />
          <Story text="The news came from the outer rim first. Contact with alien life, one of earths colonies had been approached first. We signaled peace, they did not." />
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