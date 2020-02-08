import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotifsScreen from '../screens/NotifsScreen';
import MsgScreen from '../screens/MsgScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchStack.path = '';

const NotifsStack = createStackNavigator(
  {
    Notifs: NotifsScreen,
  },
  config
);

NotifsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'} />
  ),
};

NotifsStack.path = '';

const MessagesStack = createStackNavigator(
  {
    Messages: MsgScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
  ),
};

NotifsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack, SearchStack, NotifsStack, MessagesStack
  },
  { tabBarOptions: { showLabel: false } }
);

tabNavigator.path = '';

export default tabNavigator;
