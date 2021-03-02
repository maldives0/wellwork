import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import StackWorkScreen from './StackWorkScreen';
import StackUserScreen from './StackUserScreen';
import StackApplyScreen from './StackApplyScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName, iconSize, iconColor;
  if (name === 'StackWorkScreen') {
    iconName = 'dashboard';
  } else if (name === 'StackUserScreen') {
    iconName = 'user';
  } else if (name === 'StackApplyScreen') {
    iconName = 'calendar';
  }
  iconSize = focused ? 34 : 24;
  iconColor = focused ? '#348F50' : 'gray';
  return <AntDesign size={iconSize} name={iconName} color={iconColor} />;
};
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackWorkScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#348F50',
        inactiveTintColor: 'gray',
        style: { height: 60 },
      }}
    >
      <Tab.Screen name="StackWorkScreen" component={StackWorkScreen} />
      <Tab.Screen name="StackUserScreen" component={StackUserScreen} />
      <Tab.Screen name="StackApplyScreen" component={StackApplyScreen} />
    </Tab.Navigator>
  );
};
export default Main;
