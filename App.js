import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import DuaListView from './src/DuaListView/DuaListView';
import DuaItemDetails from './src/DuaItemDetails/DuaItemDetails';
import Settings from './src/Settings/Settings';
import {data} from './data';
import {Ionicons} from '@expo/vector-icons';

class App extends React.PureComponent {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    headerBackground: <View style={{backgroundColor: 'black', flex: 1}} />,
    headerStyle: {backgroundColor: 'black', borderBottomWidth: 0}
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  render() {
    return (
      <SafeAreaView
        style={{backgroundColor: '#F8F8F8', flex: 1, alignItems: 'center'}}
      >
        <Text style={{marginTop: 30, fontSize: 22}}>Dua Central</Text>

        <DuaListView data={data} navigate={this.props.navigation.navigate} />
      </SafeAreaView>
    );
  }
}

class Details extends React.PureComponent {
  static navigationOptions = ({navigation}) => ({
    headerTintColor: 'white',
    headerStyle: {backgroundColor: 'black', borderBottomWidth: 0},
    headerTitle: (
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          textAlign: 'center'
        }}
      >
        {navigation.state.params.tags}
      </Text>
    ),
    headerBackground: <View style={{backgroundColor: 'black', flex: 1}} />,
    headerBackgroundTransitionPreset: 'translate'
  });
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#F8F8F8', flex: 1, alignItems: 'center'}}>
        <DuaItemDetails
          arabicDua={this.props.navigation.state.params.arabicDua}
          englishDua={this.props.navigation.state.params.englishDua}
          translationDua={this.props.navigation.state.params.translationDua}
          tags={this.props.navigation.state.params.tags}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {}
  },
  Details: {
    screen: Details
  }
});

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Home: AppNavigator,
      Settings: Settings
    },
    {tabBarPosition: 'bottom'}
  )
);
