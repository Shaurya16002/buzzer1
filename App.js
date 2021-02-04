import React, { Component } from 'react';
import { Button, View, Text, Alert, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 40,
            width: 200,
            marginLeft: 80,
            backgroundColor: 'blue',
            height: 50,
            borderWidth: 2,
          }}
          onPress={() => Alert.alert('Play Sound 1')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> Sound 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 40,
            width: 200,
            marginLeft: 80,
            backgroundColor: 'red',
            height: 50,
            borderWidth: 2,
          }}
          onPress={() => Alert.alert('Play Sound 1')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> Sound 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 40,
            width: 200,
            marginLeft: 80,
            backgroundColor: 'green',
            height: 50,
            borderWidth: 2,
          }}
          onPress={() => Alert.alert('Play Sound 1')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> Sound 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 40,
            width: 200,
            marginLeft: 80,
            backgroundColor: 'orange',
            height: 50,
            borderWidth: 2,
          }}
          onPress={() => Alert.alert('Play Sound 1')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> Sound 4</Text>
        </TouchableOpacity>

<TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 40,
            width: 200,
            marginLeft: 80,
            backgroundColor: 'yellow',
            height: 50,
            borderWidth: 2,
          }}
          onPress={() => Alert.alert('Play Sound')}>
          <Text style={{ textAlign: 'center', color: 'white' }}> Sound 5</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
