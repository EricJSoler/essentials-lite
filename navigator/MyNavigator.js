import React from 'react'
import { StackNavigator } from 'react-navigation';
import MyHomeScreen from '../screens/MyHomeScreen';
import MyDetailsScreen from '../screens/MyDetailsScreen';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Details: {
      screen: MyDetailsScreen,
    }
  },
  {
      headerMode: 'none'
  }
);

export default RootNavigator;
