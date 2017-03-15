import React, {Component} from "react";

import {
  View,
  Text,
} from "react-native";

export default class ForgotPassword extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text>
          Forgot Password
        </Text>
      </View>
    );
  }
}
