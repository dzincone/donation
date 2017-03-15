import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import LoginForm from '../LoginForm/Component';

export default function render() {
  return (
    <LinearGradient colors={['#4fdec1', '#2ABB9B', '#16A085']} style={styles.container}>
      <View style={{flexDirection: 'row', paddingTop: 100}}>
        <Text style={styles.welcome}>
          IOS
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 80}} width='70%'>
        <LoginForm />
      </View>
      <View style={{flexDirection: 'row', paddingTop: 40}} width="70%">
        <TouchableHighlight
          style={{backgroundColor: 'white', paddingTop: 15, paddingBottom: 15, flex: 1, borderRadius: 4}}
          onPress={() => this.login('home')}
          underlayColor='white'
        >
          <Text style={{textAlign: 'center', color: '#16A085', fontSize: 20}}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 20}}>
        <Text
          style={{backgroundColor: 'transparent', color: 'white'}}
          onPress={() => this.forgotPassword('forgotPassword')}
        >
          Forgot your password?
        </Text>

      </View>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.createText}
            onPress={() => this.createAccount('createAccount')}
            >
              Create an account
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  welcome: {
    flexDirection: 'row',
    fontSize: 60,
    color: '#ebfaf3',
    backgroundColor: 'transparent',
  },
  createText: {
    color: '#ebfaf3',
    fontSize: 18,
    marginBottom: 30,
    backgroundColor: 'transparent',
  }

});
