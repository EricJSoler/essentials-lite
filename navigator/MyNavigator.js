import React from 'react'
import { StackNavigator } from 'react-navigation';
import MyHomeScreen from '../screens/MyHomeScreen';
import MyDetailsScreen from '../screens/MyDetailsScreen';
import SignInScreen from '../screens/SignInScreen';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Details: {
      screen: MyDetailsScreen,
    },
    SignInScreenAdmin: {
      screen: SignInScreen
    }
  },
  {
      headerMode: 'none'
  }
);

export default RootNavigator;
