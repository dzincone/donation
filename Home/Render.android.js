import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Profile from "./Profile";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';

const FooterTabs = TabNavigator({
  Home: {
    screen: Profile,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

// <Profile recentGames={this.state.recentGames} gameStatistics={this.state.gameStatistics} />



export default function render() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#bdc3c7'}}>

      {/* Header and Main Menu */}
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#16A085', paddingTop: 15, paddingBottom: 10, flex: 1}}>
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
      {/* End Header and Main Menu */}


      <FooterTabs screenprops={{gameStatistics: this.state.gameStatistics, recentGames: this.state.recentGames}}/>

      {/* Footer Tabs */}
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', backgroundColor: '#16A085'}}>
          <View style={{flex: 1, backgroundColor: '#4fdec1'}}>
              <Icon name="account-box" size={40} color="white" style={{textAlign: 'center'}}/>
          </View>
          <View style={{flex: 1}}>
            <Icon name="cash-usd" size={40} color="white" style={{textAlign: 'center'}}/>
          </View>
          <View style={{flex: 1}}>
            <Icon name="settings" size={40} color="white" style={{textAlign: 'center'}}/>
          </View>
        </View>
      </View>
      {/* End Footer Tabs */}

    </View>
  );
}
