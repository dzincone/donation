import React, {Component} from "react";

import {

} from "react-native";

import Render from "./Render";

export default class Home extends Component {

  constructor() {
    super();

    this.createAccount = this.createAccount.bind(this);
    this.login = this.login.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  login(name) {
    this.props.navigator.push({
      name,
    });
  }

  createAccount(name) {
    this.props.navigator.push({
      name,
    });
  }

  forgotPassword(name) {
    this.props.navigator.push({
      name,
    });
  }

  render() {
    return Render.bind(this)();
  }
}
