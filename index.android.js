import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import SplashScreen from './SplashScreen/Component';
import Home from './Home/Component';
import CreateAccount from './CreateAccount/Component';
import ForgotPassword from "./ForgotPassword/Component";

export default class testthing extends Component {

  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    if (route.name === 'splashScreen') {
      return <SplashScreen navigator={navigator} />;
    } else if (route.name === 'home') {
      return <Home navigator={navigator} />;
    } else if (route.name === 'createAccount') {
      return <CreateAccount navigator={navigator} />
    } else if (route.name === 'forgotPassword') {
      return <ForgotPassword navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('testthing', () => testthing);
