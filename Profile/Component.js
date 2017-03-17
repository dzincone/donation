import React, {Component} from 'react';

import Render from "./Render";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return Render.bind(this)();
  }
}
