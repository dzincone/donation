import React, {Component} from 'react';

import Render from './Render';

export default class Games extends Component {

  constructor() {
    super();
  }


  render() {
    return Render.bind(this)();
  }
}
