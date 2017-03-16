import React, {Component} from 'react';

import {
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';


export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#16A085', paddingTop: 15, paddingBottom: 10}}>
        <Icon name="menu" size={30} color="white" style={{flex: 0.2, textAlign: 'center'}}/>
        <View style={{flex: 0.8, alignItems: 'center'}}>
          <Text>
            Logo
          </Text>
        </View>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <IconBadge
          MainElement={
            <Icon name="message" size={30} color="white"/>
          }
          BadgeElement={
            <Text style={{color: 'white'}}>!</Text>
          }
          IconBadgeStyle={
            {width: 15,
              height: 15,
              backgroundColor: 'blue'}
            }
            />
        </View>
      </View>
    );
  }

}
