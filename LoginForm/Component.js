import React, { Component } from 'react';

import {
  Animated,
} from 'react-native';

import Render from './Render';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: 'Email', password: 'Password' };
    this.bounceEmail = new Animated.Value(1);
    this.bouncePassword = new Animated.Value(1);

    this.bounce = this.bounce.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  bounce(value) {
    Animated.spring(
     this[value],
     {
       toValue: 1.1,
       friction: 5,
     }
   ).start();
  }

  debounce(value) {
    Animated.spring(
      this[value],
      {
        toValue: 1,
        friction: 5,
      }
    ).start();
  }

  render() {
    return Render.bind(this)();
  }
}
