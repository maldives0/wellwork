/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabHomeScreen from './src/TabHomeScreen';
import TabUserScreen from './src/TabUserScreen';
import TabSettingScreen from './src/TabSettingScreen';
import LoginFormScreen from './src/LoginFormScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBarIcon = (focused, name) => {
  let iconName, iconSize, iconColor;
  if (name === 'TabHomeScreen') {
    iconName = 'dashboard';
  } else if (name === 'TabUserScreen') {
    iconName = 'user';
  } else if (name === 'TabSettingScreen') {
    iconName = 'setting';
  }
  iconSize = focused ? 30 : 20;
  iconColor = focused ? 'green' : 'gray';
  return <AntDesign size={iconSize} name={iconName} color={iconColor} />;
};
const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHomeScreen"
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="TabHomeScreen" component={TabHomeScreen} />
      <Tab.Screen name="TabUserScreen" component={TabUserScreen} />
      <Tab.Screen name="TabSettingScreen" component={TabSettingScreen} />
    </Tab.Navigator>
  );
};
const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabHomeScreen"
      drawerPosition="right"
      drawerToggleRoute={({}) => <HeaderRight />}>
      <Drawer.Screen name="TabHomeScreen" component={TabComponent} />
      <Drawer.Screen name="loginform" component={LoginFormScreen} />
    </Drawer.Navigator>
  );
};
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
        style={{marginRight: 10}}>
        <Text>open</Text>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="logout"
            component={DrawerComponent}
            options={{
              headerRight: ({}) => <HeaderRight />,
            }}
          />
          <Stack.Screen name="login" component={TabComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
