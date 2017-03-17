import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Profile from "../Profile/Component";
import Games from "../Games/Component";
import Settings from "../Settings/Component";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Component";




export default class Render extends Component {
  constructor(props) {
    super(props)
  }

  render(){
  const Tabs = TabNavigator({
    Profile: {
      screen: Profile,
    },
    Games: {
      screen: Games,
    },
    Settings: {
      screen: Settings,
    },
  }, {
    tabBarComponent: Footer,
    tabBarPosition: 'bottom',
  });

  return (
    <View style={{flex: 1, backgroundColor: '#bdc3c7'}}>
      <Header navigation={this.props.navigation}/>

      <View style={{flex: 1}}>
        <Tabs screenProps={{gameStatistics: this.props.screenProps.gameStatistics, recentGames: this.props.screenProps.recentGames, loadMoreGames: this.props.screenProps.loadMoreGames}}/>
      </View>

    </View>
  );
}
}
