import React, {Component} from 'react';

import Render from './Render';

import { DrawerNavigator } from 'react-navigation';
import Drawer from "./Drawer";


export default class Home extends Component {

  constructor() {
    super();
    this.state = {recentGames: [{id: '64', totalPlayers: '34', donationAmount: '5', status: 'Winner', transactionAmount: '25'},
                          {id: '63', totalPlayers: '15', donationAmount: '2', status: 'Lost', transactionAmount: '2'},
                          {id: '22', totalPlayers: '2', donationAmount: '1', status: 'Winner', transactionAmount: '2'},
                          {id: '16', totalPlayers: '18', donationAmount: '2', status: 'Winner', transactionAmount: '36'},
                          {id: '128', totalPlayers: '265', donationAmount: '1', status: 'Winner', transactionAmount: '1286'}],
                  gameStatistics: {totalGames: '35', gamesWon: '3', 'donationsGiven': '34', donationsReceived: '140'}};

    this.loadMoreGames = this.loadMoreGames.bind(this);
  }

  loadMoreGames() {
    console.log('loaded more games');
  }

  render() {
    const DrawerMenu = DrawerNavigator({
      Home: {
        screen: Render,
      }
    },{
      contentComponent: Drawer,
      drawerPosition: 'left',
    });

    return (
      <DrawerMenu screenProps={{recentGames: this.state.recentGames, gameStatistics: this.state.gameStatistics, loadMoreGames: this.loadMoreGames}}/>
    );
  }
}
