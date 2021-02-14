import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ApplyHome from '../Screens/Apply/ApplyHome';
import ApplyForm from '../Screens/Apply/ApplyForm';

const Stack = createStackNavigator();

function StackApplyScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ApplyHome"
        component={ApplyHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ApplyForm"
        component={ApplyForm}
        options={{
          headerShown: true,
          title: '근태 신청하기',
        }}
      />
    </Stack.Navigator>
  );
}
export default StackApplyScreen;