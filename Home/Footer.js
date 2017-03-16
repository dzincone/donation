import React, {Component} from 'react';

import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#16A085'}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Profile')}>
        <View style={{flex: 1, backgroundColor: this.props.navigationState.index === 0 ? '#4fdec1' : 'transparent'}}>
            <Icon name="account-box" size={40} color="white" style={{textAlign: 'center'}}/>
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Games')}>
          <View style={{flex: 1, backgroundColor: this.props.navigationState.index === 1 ? '#4fdec1' : 'transparent'}}>
          <Icon name="cash-usd" size={40} color="white" style={{textAlign: 'center'}}/>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={{flex: 1, backgroundColor: this.props.navigationState.index === 2 ? '#4fdec1' : 'transparent'}}>
          <Icon name="settings" size={40} color="white" style={{textAlign: 'center'}}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

}
