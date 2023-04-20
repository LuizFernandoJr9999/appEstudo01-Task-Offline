import React, {Component} from 'react';
import {
  ImageBackground, 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  Platform,
  TouchableOpacity, 
  Alert
} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

export default class Auth extends Component {
  state = {
    name: '',
    email: '', 
    password: '',
    confirmPassword: '',
    stageNew: true
  }

  signinOrSignup = () => {
    if (this.state.stageNew) {
      Alert.alert('Sucesso!', 'Criar conta')
    } else {
      Alert.alert('Sucesso!', 'Logar')
    }
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados' }
          </Text>
          {this.state.stageNew &&
            <TextInput 
              placeholder="Nome" 
              value={this.state.name}
              style={styles.input} 
              onChangeText={name => this.setState({name})} 
            />
          }
          <TextInput 
            placeholder="E-mail" 
            value={this.state.email}
            style={styles.input} 
            onChangeText={email => this.setState({email})} 
          />
          <TextInput 
            placeholder="Senha" 
            value={this.state.password}
            style={styles.input} 
            secureTextEntry={true}
            onChangeText={password => this.setState({password})} 
          />
          {this.state.stageNew &&
            <TextInput 
              placeholder=" Confirmação de Senha" 
              value={this.state.confirmPassword}
              style={styles.input} 
              secureTextEntry={true}
              onChangeText={confirmPassword => this.setState({confirmPassword})} 
            />
          }
          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={{padding: 10}}
          onPress={() => this.setState({stageNew: !this.state.stageNew})}>
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? 'Já possui conta?'
              : 'Ainda não possui conta?'}
          </Text>
        </TouchableOpacity>
      </ImageBackground> 
    )
  }
}
const styles = StyleSheet.create({
  background:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    width: '90%'
  },
  input: {
    marginTop: 10,
    backgroundColor: '#FFF',
    padding: Platform.OS == 'ios' ? 15 : 8
  },
  button:{
    backgroundColor: '#080',
    marginTop: 10,
    padding: 8,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: '#FFF',
    fontSize: 20
  }
})