import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchHardCodedDBScreen from './screens/SearchHardCodedDBScreen';

export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <SearchHardCodedDBScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
