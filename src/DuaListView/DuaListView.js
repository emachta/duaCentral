import React, { PureComponent } from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import { DuaListItem } from '../DuaListItem';

export default class DuaListView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  render() {
    const articles = this.props.data.map(item => (
      <DuaListItem
        arabicDua={item.arabicDua}
        englishDua={item.englishDua}
        favorited={false}
        input={this.state.input}
        key={item.arabicDua}
      />
    ));

    return (
      <View style={{ alignItems: 'center' }}>
        <TextInput
          placeholder="Type a dua"
          style={{
            marginTop: 15,
            width: 250,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 5,
          }}
          onChangeText={(text) => {
            this.setState({ input: text });
          }}
        />

        <ScrollView>
          <View style={{ marginTop: 40 }} />
          {articles}
        </ScrollView>
      </View>
    );
  }
}
