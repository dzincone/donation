import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native'

export default class Profile extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return(
      <View style={{flexDirection: 'row', flex: 18}}>
        <ScrollView>
          <View style={{flexDirection: 'column', flex: 1}}>
            {/* First Card */}
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5, marginRight: 5}}>
              <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#16A085'}}>
                {/* Card Header */}
                <View style={{flexDirection: 'row', backgroundColor: '#2ABB9B', marginBottom: 5}}>
                  <View style={{paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center'}}>
                    <Text>
                      Game Statistics
                    </Text>
                  </View>
                </View>
                {/* Card sub-headers */}
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{textAlign: 'center'}}>
                      Total Games
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{textAlign: 'center'}}>
                      Games Won
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{textAlign: 'center'}}>
                      Donations Given
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{textAlign: 'center'}}>
                      Donations Received
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                  <View style={{borderTopWidth: 2, borderTopColor: '#16A085', flex: 1, marginLeft: '3%', marginRight: '3%'}}></View>
                  <View style={{borderTopWidth: 2, borderTopColor: '#16A085', flex: 1, marginLeft: '3%', marginRight: '3%'}}></View>
                  <View style={{borderTopWidth: 2, borderTopColor: '#16A085', flex: 1, marginLeft: '3%', marginRight: '3%'}}></View>
                  <View style={{borderTopWidth: 2, borderTopColor: '#16A085', flex: 1, marginLeft: '3%', marginRight: '3%'}}></View>
                </View>

                {/* Card data */}
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>
                      {this.props.screenProps.gameStatistics.totalGames}
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>
                      {this.props.screenProps.gameStatistics.gamesWon}
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>
                      {this.props.screenProps.gameStatistics.donationsGiven}
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>
                      {this.props.screenProps.gameStatistics.donationsReceived}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* End First Card */}

            {/* Second Card */}
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5, marginRight: 5}}>
              <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#16A085'}}>
                {/* Card Header */}
                <View style={{flexDirection: 'row', backgroundColor: '#2ABB9B', marginBottom: 5}}>
                  <View style={{paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center'}}>
                    <Text>
                      Graphs
                    </Text>
                  </View>
                </View>

                {/* Graphs */}
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 30, paddingBottom: 30, alignItems: 'center', marginRight: 2.5}}>
                  <Text>
                    Total donations received
                  </Text>

                  </View>

                  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 30, paddingBottom: 30, alignItems: 'center', marginLeft: 2.5}}>
                    <Text>
                      Total donations given
                    </Text>
                  </View>
                </View>
                {/* End Graphs */}
              </View>
            </View>
            {/* End Graphs Card */}

            {/* Third Card */}
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5, marginRight: 5, marginBottom: 40}}>
              <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#16A085'}}>
                {/* Card Header */}
                <View style={{flexDirection: 'row', backgroundColor: '#2ABB9B', marginBottom: 5}}>
                  <View style={{paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center'}}>
                    <Text>
                      Recent Games
                    </Text>
                  </View>
                </View>

                {this.props.screenProps.recentGames.map((gameData, i) => {
                  return (
                    <View style={{flexDirection: 'row'}} key={i}>
                      <View style={{flexDirection: 'column', flex: 1, marginBottom: 2}}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column', flex: 0.4, backgroundColor: 'white'}}>
                            <View style={{flexDirection: 'row'}}>
                              <View>
                                <Text style={{fontSize: 12}}>
                                  Total Players:
                                </Text>
                              </View>
                              <View>
                                <Text style={{fontSize: 12, paddingLeft: 5}}>
                                  {gameData.totalPlayers}
                                </Text>
                              </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <View>
                                <Text style={{fontSize: 12}}>
                                  Donation Amount:
                                </Text>
                              </View>
                              <View>
                                <Text style={{fontSize: 12, paddingLeft: 5}}>
                                  ${gameData.donationAmount}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flexDirection: 'column', flex: 0.6, backgroundColor: 'white', justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: '500', color: gameData.status === 'Winner' ? '#4fdec1' : '#D64541'}}>
                                  {gameData.status}
                                </Text>
                              </View>
                              <View style={{flex: 1}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                                  <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 12}}>
                                      {gameData.status === 'Winner' ? 'Donations Received' : 'Donation Given'}
                                    </Text>
                                  </View>
                                  <View style={{alignItems: 'center'}}>
                                    <Text>
                                      ${gameData.transactionAmount}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })}

                <View>
                  <TouchableHighlight
                  onPress={this.loadMoreGames}
                  underlayColor='#D35400'
                  style={{backgroundColor: '#F2784B', padding: 10}}>
                    <Text style={{textAlign: 'center'}}>Check More Games</Text>
                  </TouchableHighlight>
                </View>

              </View>
            </View>
            {/* End Recent Games Card */}

          </View>
        </ScrollView>
      </View>
    );
  }
}
