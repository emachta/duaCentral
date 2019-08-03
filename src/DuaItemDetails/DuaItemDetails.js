import React, { PureComponent } from 'react';
import { Text, View, Dimensions } from 'react-native';

export default class DuaItemDetails extends PureComponent {
  render() {
    const { arabicDua, englishDua } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'black', width: Dimensions.get('window').width }}>
        <View style={{ backgroundColor: '#061019', flex: 1, padding: 30 }}>
          <Text style={{ color: 'white', fontSize: 35 }}>{arabicDua}</Text>
        </View>
        <View style={{ backgroundColor: '#DCE5DF', flex: 2, padding: 30 }}>
          <Text style={{ fontSize: 35 }}>{englishDua}</Text>
        </View>
      </View>
    );
  }
}
