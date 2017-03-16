import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Profile from "./Profile";
import Footer from "./Footer";
import Header from "./Header";




export default function render() {
  const Tabs = TabNavigator({
    Profile: {
      screen: Profile,
    },
    Games: {
      screen: Profile,
    },
    Settings: {
      screen: Profile,
    },
  }, {
    tabBarComponent: Footer,
    tabBarPosition: 'bottom',
  });

  return (
    <View style={{flex: 1, backgroundColor: '#bdc3c7'}}>
      <Header />

      <View style={{flex: 1}}>
        <Tabs screenProps={{gameStatistics: this.state.gameStatistics, recentGames: this.state.recentGames}}/>
      </View>

    </View>
  );
}
