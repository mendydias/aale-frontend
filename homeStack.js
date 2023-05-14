import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Create from '../screens/Create';
import Login from '../screens/Login';
const screens = {
Dashboard: {
    screen: Home,
  },
Create: {
    screen: Create,
  },
 Login:{
   screen:Login,
 }
};
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);