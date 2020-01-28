import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CustomTabBar extends React.Component {
  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;

    return (
      <View style={{backgroundColor: 'red', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', height: 50}}>
        {
          state.routes.map(element => (
            <TouchableOpacity key={element.key} onPress={() => Actions[element.key]()} style={{backgroundColor: 'green'}}>
              <Text>{element.key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}