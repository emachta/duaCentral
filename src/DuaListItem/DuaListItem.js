import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class DuaListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      favorited: props.favorited,
      visible: true,
      search: props.input === '' ? false : true,
    };
  }

  toggleFavorite = () => {
    this.setState({ favorited: !this.state.favorited });
  };

  toggleFalse = () => {
    this.setState({ visible: false });
  };

  toggleTrue = () => {
    this.setState({ visible: true });
  };

  render() {
    const { arabicDua, englishDua, input } = this.props;

    if (englishDua.search(input) >= 0) {
      this.toggleTrue();
    } else {
      this.toggleFalse();
    }

    return (
      <View style={{ display: this.state.visible ? 'flex' : 'none' }}>
        <View style={styles.container}>
          <View style={styles.star}>
            <TouchableOpacity onPress={this.toggleFavorite}>
              <Image
                source={
                  this.state.favorited
                    ? require('../../assets/star.png')
                    : require('../../assets/star_empty.png')
                }
                style={styles.starImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity>
              <Text numberOfLines={2} adjustsFontSizeToFit style={{ color: 'white' }}>
                {arabicDua}
              </Text>
              <Text adjustsFontSizeToFit style={{ color: 'white' }}>
                {englishDua}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
