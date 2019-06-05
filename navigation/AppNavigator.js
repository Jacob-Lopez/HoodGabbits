import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';


// Code for the original switch navigator
// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(DrawerNavigator);