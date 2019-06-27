'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator,
       createAppContainer} from 'react-navigation';

type Props = {};
class RingtonePage extends Component<Props> {
    static navigationOptions = {
        title: 'Ringtone Randomizer'
    };
    
  render() {
      return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

const RootStack = createStackNavigator({
    Home: { screen: RingtonePage},
});

const App = createAppContainer(RootStack);

export default App;


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

