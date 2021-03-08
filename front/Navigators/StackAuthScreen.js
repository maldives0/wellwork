import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Auth/Login';
import StackRegisterScreen from './StackRegisterScreen';
import LoginKakao from '../Screens/Auth/LoginKakao';
import RegisterOTP from '../Screens/Auth/RegisterOTP';

const StackAuthScreen = createStackNavigator();

function StackApplyScreen() {
  return (
    <StackAuthScreen.Navigator initialRouteName="로그인">
      <StackAuthScreen.Screen name="로그인" component={Login} />
      <StackAuthScreen.Screen
        name="회원가입하기"
        options={{ headerShown: false }}
        component={StackRegisterScreen}
      />
      <StackAuthScreen.Screen
        name="휴대폰번호 로그인"
        component={RegisterOTP}
      />
      <StackAuthScreen.Screen name="카카오 로그인" component={LoginKakao} />
    </StackAuthScreen.Navigator>
  );
}
export default StackApplyScreen;
