import React, {PureComponent} from 'react';
import {
  Text,
  View,
  Switch,
  ScrollView,
  AsyncStorage,
  StatusBar,
  SafeAreaView
} from 'react-native';

export default class Settings extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#black',
      border: 0,
      borderBottomWidth: 0
    },
    headerTintColor: 'white',
    headerTitle: 'Settings',
    headerStyle: {
      backgroundColor: '#050E16',
      border: 0,
      borderBottomWidth: 0
    }
  });
  constructor(props) {
    super(props);
    this.state = {showAllDuas: this._retrieveData()};
  }

  _retrieveData = async id => {
    const value = await AsyncStorage.getItem('showAllDuas');

    if (value === null) {
      this.setState({favorited: false});
    } else if (value === 'true') {
      this.setState({showAllDuas: true});
    } else {
      this.setState({showAllDuas: false});
    }
  };

  _storeData = async id => {
    const value = await AsyncStorage.getItem('showAllDuas');

    if (value === null) {
      await AsyncStorage.setItem('showAllDuas', 'true');
      this.setState({showAllDuas: true});
    } else if (value === 'true') {
      await AsyncStorage.setItem('showAllDuas', 'false');
      this.setState({showAllDuas: false});
    } else if (value === 'false') {
      await AsyncStorage.setItem('showAllDuas', 'true');
      this.setState({showAllDuas: true});
    }
    alert(
      'Please restart the application to allow your changes to take effect.'
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{margin: 20, flexDirection: 'row'}}>
            <Text style={{flex: 4, fontSize: 20}}>Show All Duas</Text>
            <Switch
              style={{flex: 1, alignItems: 'flex-end'}}
              value={this.state.showAllDuas}
              onValueChange={this._storeData}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Written and Designed by Ennis Machta - 2019</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
