import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class CreateAccount extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
        <Text>
          Create Account
        </Text>
      </View>
    );
  }
}
