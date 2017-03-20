import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Text>Account info</Text>
      </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{padding: 15}}>
            <Icon name="account" size={20} color="white" style={{textAlign: 'center', backgroundColor: 'blue', borderRadius: 50, padding: 2}}/>
          </View>
          <View>
            <Text>Account Settings</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{padding: 15}}>
            <Icon name="cash-multiple" size={20} color="white" style={{textAlign: 'center', backgroundColor: 'green', borderRadius: 50, padding: 2}}/>
          </View>
          <View>
            <Text>Payment Settings</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{padding: 15}}>
            <Icon name="human-handsup" size={20} color="white" style={{textAlign: 'center', backgroundColor: 'purple', borderRadius: 50, padding: 2}}/>
          </View>
          <View>
            <Text>Charities</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{padding: 15}}>
            <Icon name="file-document" size={20} color="white" style={{textAlign: 'center', backgroundColor: 'orange', borderRadius: 50, padding: 2}}/>
          </View>
          <View>
            <Text>Terms & Policies</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{padding: 15}}>
            <Icon name="arrow-left-bold-circle-outline" size={20} color="white" style={{textAlign: 'center', backgroundColor: 'red', borderRadius: 50, padding: 2}}/>
          </View>
          <View>
            <Text>Logout</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

}
