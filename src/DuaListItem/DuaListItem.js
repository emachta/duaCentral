import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { styles } from './styles';

export class DuaListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      visible: true,
    };
  }

  componentDidMount() {
    this._retrieveData(this.props.id);
  }

  toggleFalse = () => {
    this.setState({ visible: false });
  };

  toggleTrue = () => {
    this.setState({ visible: true });
  };

  componentDidUpdate() {
    if (this.props.tags.search(this.props.input) >= 0) {
      this.toggleTrue();
    } else {
      this.toggleFalse();
    }
  }

  _retrieveData = async id => {
    const value = await AsyncStorage.getItem(id + ':favorited');

    if (value === null) {
      this.setState({ favorited: false });
    } else {
      this.setState({ favorited: true });
    }
  };

  _storeData = async id => {
    const value = await AsyncStorage.getItem(id + ':favorited');

    if (value === null) {
      await AsyncStorage.setItem(id + ':favorited', 'THIS ITEM IS FAVORITED');
      this.setState({ favorited: true });
    } else {
      await AsyncStorage.removeItem(id + ':favorited');
      this.setState({ favorited: false });
    }
  };

  render() {
    const { arabicDua, tags, id, input } = this.props;

    return (
      <View
        style={{
          display:
            (this.state.visible && input !== '') || (this.state.favorited && input == '')
              ? 'flex'
              : 'none',
        }}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: this.state.favorited ? '#BFA907' : '#5CB7CE' },
          ]}
        >
          <TouchableOpacity
            style={styles.star}
            onPress={() => {
              this._storeData(id);
            }}
          >
            <Image
              source={
                this.state.favorited
                  ? require('../../assets/star.png')
                  : require('../../assets/star_empty.png')
              }
              style={styles.starImage}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: 24,
                paddingRight: 15,
              }}
            >
              {arabicDua}
            </Text>
            <Text numberOfLines={1} style={{ color: 'white', fontSize: 20 }}>
              {tags}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
