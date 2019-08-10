import React, { PureComponent } from 'react';
import {
  Text, View, ScrollView, Dimensions,
} from 'react-native';

export default class DuaItemDetails extends PureComponent {
  render() {
    const { arabicDua, translationDua, englishDua } = this.props;
    return (
      <View
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      >
        <ScrollView style={{ backgroundColor: '#061019', padding: 25 }}>
          <Text style={{ color: 'white', fontSize: 40 }}>{arabicDua}</Text>
          <Text style={{ color: 'white', fontSize: 19, marginTop: 20 }}>{englishDua}</Text>
          <View style={{ marginBottom: 100 }} />
        </ScrollView>
        <ScrollView style={{ backgroundColor: '#DCE5DF', padding: 25 }}>
          <Text style={{ fontSize: 25, marginBottom: 50 }}>{translationDua}</Text>
          <View style={{ marginBottom: 100 }} />
        </ScrollView>
      </View>
    );
  }
}
