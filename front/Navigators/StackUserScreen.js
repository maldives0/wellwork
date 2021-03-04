import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WorkingTime from '../Screens/Work/WorkingTime';
import ApplyHome from '../Screens/Apply/ApplyHome';
import UserProfile from '../Components/UserProfile';

const StackUserScreen = createStackNavigator();

function StackApplyScreen() {
  return (
    <StackUserScreen.Navigator initialRouteName="근무시간">
      <StackUserScreen.Screen name="근무시간" component={WorkingTime} />
      <StackUserScreen.Screen name="근태신청" component={ApplyHome} />
      <StackUserScreen.Screen name="프로필" component={UserProfile} />
    </StackUserScreen.Navigator>
  );
}
export default StackApplyScreen;
