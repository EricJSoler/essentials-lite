import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import SearchHardCodedDBScreen from './screens/SearchHardCodedDBScreen';
import MyNavigator from './navigator/MyNavigator';

export default class App extends React.Component {
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
