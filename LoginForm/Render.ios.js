import React from "react";

import {
  View,
  TextInput,
  Animated,
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function render() {
  return (
    <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start"}}>
      <Animated.View
        style={{transform: [{scale: this.bounceEmail}]}}
      >
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "white"}}>
          <Icon name="email-outline" size={30} color="orange" style={{flex: 0.15}}/>
          <TextInput
            style={{height: 35, flex: 0.85, color: 'white'}}
            onChangeText={(text) => this.setState({text})}
            placeholder="Email"
            placeholderTextColor="#489E87"
            onFocus={() => this.bounce('bounceEmail')}
            onBlur={() => this.debounce('bounceEmail')}
          />
        </View>
      </Animated.View>
      <Animated.View
        style={{transform: [{scale: this.bouncePassword}]}}
      >
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'white', paddingTop: 25}}>
        <Icon name="lock-outline" size={30} color="orange" style={{flex: 0.15}}/>
        <TextInput
          style={{height: 35, flex: 0.85, color: 'white'}}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          placeholderTextColor="#489E87"
          onFocus={() => this.bounce('bouncePassword')}
          onBlur={() => this.debounce('bouncePassword')}
          secureTextEntry
        />
        </View>
      </Animated.View>
    </View>
);
}
