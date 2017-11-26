import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import SearchHardCodedDBScreen from './screens/SearchHardCodedDBScreen';
import MyNavigator from './navigator/MyNavigator';
import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://10.0.0.30:3000/websocket';

export default class App extends React.Component {
  // TODO remove
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }
  // TODO remove
  componentDidMount() {
    Meteor.call('trendingList.get', undefined, (err, res) => {
      console.log('trendingList.get', err, res);
    });
  }

  render() {
    return (
      <MyNavigator style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
});
