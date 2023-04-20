import React, {Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import ChecaNumero from './ChecaNumero';
//const App = () => {
//  return(
//  <ChecaNumero numero={4} 
///>
//)}
//export default App;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../assets/')} 
          />
        <Text> textInComponent</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 28
  }
})