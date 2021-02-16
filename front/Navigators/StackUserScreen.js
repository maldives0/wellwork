import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginForm from '../Screens/User/LoginForm';
import RegisterForm from '../Screens/User/RegisterForm';
import UserProfile from '../Screens/User/UserProfile';


const Stack = createStackNavigator();

function StackApplyScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForm"
               component={LoginForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterForm"
               component={RegisterForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
                  }}
      />
    </Stack.Navigator>
  );
}
export default StackApplyScreen;
