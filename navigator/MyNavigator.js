import React from 'react'
import { StackNavigator } from 'react-navigation';
import MyHomeScreen from '../screens/MyHomeScreen';
import MyDetailsScreen from '../screens/MyDetailsScreen';

const HomeScreen = ({navigation}) => (
    <MyHomeScreen navigation={navigation}/>
  );

//   const DetailsScreen = ({navigation}) => (
//     <MyDetailsScreen navigation={navigation}/>
//   );

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: MyDetailsScreen,
    },
  },
  {
      headerMode: 'none'
  }
);

export default RootNavigator;
