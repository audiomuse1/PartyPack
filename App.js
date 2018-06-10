import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    <Image 
      source={require('./img/partypacklogo.png')}
      style={styles.logoStyle}
      resizeMode="contain"
    /> 
    );
  }
}

const styles = StyleSheet.create({
  logoStyle: {
    flex: 1, 
    alignSelf: 'stretch',
    width: undefined, 
    height: undefined, 
    backgroundColor: 'black'
  }
})


