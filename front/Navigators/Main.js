import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import UserDetail from './UserDetail';

const MainStackNavigation = createStackNavigator();

const Main = () => {
  return (
    <MainStackNavigation.Navigator headerMode="screen">
      <MainStackNavigation.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <MainStackNavigation.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </MainStackNavigation.Navigator>
  );
};
export default Main;
