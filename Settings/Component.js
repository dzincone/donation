import React, {Component} from 'react';

import Render from './Render';

export default class Settings extends Component {

  constructor() {
    super();
  }


  render() {
    return Render.bind(this)();
  }
}
