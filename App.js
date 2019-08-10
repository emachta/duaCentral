import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DuaListView from './src/DuaListView/DuaListView';
import DuaItemDetails from './src/DuaItemDetails/DuaItemDetails';
import { data } from './data';
import { Ionicons } from '@expo/vector-icons';

class App extends React.PureComponent {
  static navigationOptions = {
    header: null,
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
      <SafeAreaView style={{ backgroundColor: '#F8F8F8', flex: 1, alignItems: 'center' }}>
        <Text style={{ marginTop: 30, fontSize: 22 }}>Dua Central</Text>

        <DuaListView data={data} navigate={this.props.navigation.navigate} />
      </SafeAreaView>
    );
  }
}

class Details extends React.PureComponent {
  // static navigationOptions = ({ navigation }) => ({
  //   headerStyle: {
  //     backgroundColor: '#050E16',
  //     border: 0,
  //     borderBottomWidth: 0,
  //   },
  //   headerTintColor: '#E9F1F7',
  //   headerTitle: navigation.state.params.tags,
  // });

  static navigationOptions = ({ navigation }) => ({
    // header: (
    //   <View style={{ flex: 1, height: 90, flexDirection: 'row', backgroundColor: 'black' }}>
    //     <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
    //       <Ionicons
    //         style={{ marginTop: 50, marginLeft: 20 }}
    //         name="ios-arrow-back"
    //         size={32}
    //         color="white"
    //       />
    //     </TouchableOpacity>
    //     <View style={{ flex: 5 }}>
    //       <Text
    //         style={{
    //           fontSize: 22,
    //           color: 'white',
    //           marginTop: 50,
    //           textAlign: 'center',
    //         }}
    //       >
    //         {navigation.state.params.tags}
    //       </Text>
    //     </View>
    //     <View style={{ flex: 1 }} />
    //   </View>
    // ),
    headerTintColor: 'black',
    headerStyle: { backgroundColor: 'black', borderBottomWidth: 0 },
    headerTitle: (
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          textAlign: 'center',
        }}
      >
        {navigation.state.params.tags}
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
        <Ionicons style={{ marginLeft: 20 }} name="ios-arrow-back" size={32} color="white" />
      </TouchableOpacity>
    ),
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
      <View style={{ backgroundColor: '#F8F8F8', flex: 1, alignItems: 'center' }}>
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
    navigationOptions: {},
  },
  Details: {
    screen: Details,
  },
});

export default createAppContainer(AppNavigator);
