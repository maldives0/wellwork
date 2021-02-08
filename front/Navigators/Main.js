import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import TabWorkScreen from './TabWorkScreen';
import TabUserScreen from './TabUserScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName, iconSize, iconColor;
  if (name === 'TabWorkScreen') {
    iconName = 'dashboard';
  } else if (name === 'TabUserScreen') {
    iconName = 'user';
  }
  iconSize = focused ? 30 : 20;
  iconColor = focused ? '#348F50' : 'gray';
  return <AntDesign size={iconSize} name={iconName} color={iconColor} />;
};
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabWorkScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#348F50',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="TabWorkScreen" component={TabWorkScreen} />
      <Tab.Screen name="TabUserScreen" component={TabUserScreen} />
    </Tab.Navigator>
  );
};
export default Main;
