import React from 'react';
import { View, Text } from 'react-native';
import DuaListView from './src/DuaListView/DuaListView';
import DuaItemDetails from './src/DuaItemDetails/DuaItemDetails';
import { data } from './data';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F8', flex: 1, alignItems: 'center' }}>
        <Text style={{ marginTop: 60, fontSize: 22 }}>Dua Central</Text>
        {/* <DuaListView data={data} /> */}
        <DuaItemDetails
          arabicDua="رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ"
          englishDua="Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing"
        />
      </View>
    );
  }
}
