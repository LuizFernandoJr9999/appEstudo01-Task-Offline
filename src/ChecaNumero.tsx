import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  numero: number
}

export default (props: Props) => {
  return (
    
    <View style={estilos.container}>
      <Text style={estilos.texto}> {props.numero} </Text>
      {
      props.numero % 2 == 0
      ? <Text style={estilos.texto}>O número: {props.numero} é par!</Text>
      : <Text style={estilos.texto}>O número: {props.numero} é ímpar!</Text> 
   }
    </View>
  )
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
    padding: 20,
  }
});
