import React, {PureComponent} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';

import {DuaListItem} from '../DuaListItem';

export default class DuaListView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  lengthOfStorage = async () => {
    return await AsyncStorage.getAllKeys();
  };

  render() {
    const dataArray = this.props.data.map(item => (
      <DuaListItem
        arabicDua={item.arabicDua}
        englishDua={item.englishDua}
        translationDua={item.translationDua}
        tags={item.tags}
        navigate={this.props.navigate}
        input={this.state.input}
        id={item.id}
        key={item.id}
        onPress={() =>
          this.props.navigate('Details', {
            arabicDua: item.arabicDua,
            englishDua: item.englishDua,
            translationDua: item.translationDua,
            tags: item.tags
          })
        }
      />
    ));

    return (
      <View style={{alignItems: 'center'}}>
        <TextInput
          placeholder='🔍 Enter a duaa'
          style={{
            marginTop: 15,
            width: 280,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 5,
            fontSize: 18,
            shadowColor: 'black',
            shadowRadius: 1,
            shadowOpacity: 0.1,
            shadowOffset: {height: 3}
          }}
          onChangeText={text => {
            this.setState({input: text.toLowerCase()});
          }}
          clearButtonMode='always'
        />
        <View
          style={{
            display: this.state.input === '' ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            right: 0,
            top: 100,
            position: 'absolute'
          }}
        >
          <Image
            source={require('../../assets/duaaCentralHomePage.png')}
            resizeMode={'contain'}
            style={{
              width: Dimensions.get('window').width - 50,
              height: 250
            }}
          ></Image>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 25}} />
          {dataArray}
          <View style={{marginBottom: 100}} />
        </ScrollView>
      </View>
    );
  }
}
