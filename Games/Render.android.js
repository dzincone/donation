import React from 'react';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function render() {
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text>
            Games Page
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
