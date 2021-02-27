import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginForm from '../Screens/User/LoginForm';
import StackRegisterScreen from './StackRegisterScreen';

import KakaoForm from '../Screens/User/KakaoForm';
import UserProfile from '../Screens/User/UserProfile';
import RegisterEmail from '../Screens/User/RegisterEmail';
import RegisterOTP from '../Screens/User/RegisterOTP';
import OTPLoginForm from '../Screens/User/OTPLoginForm';
const Stack = createStackNavigator();

function StackApplyScreen() {
  return (
    <Stack.Navigator initialRouteName="로그인">
      <Stack.Screen name="로그인" component={LoginForm} />
      <Stack.Screen name="회원가입하기" component={StackRegisterScreen} />
      <Stack.Screen name="휴대폰번호" component={OTPLoginForm} />
      <Stack.Screen name="카카오" component={KakaoForm} />
      <Stack.Screen name="프로필" component={UserProfile} />
      <Stack.Screen name="이메일로 가입하기" component={RegisterEmail} />
      <Stack.Screen name="휴대폰번호로 가입하기" component={RegisterOTP} />
      <Stack.Screen name="확인코드 입력하기" component={OTPLoginForm} />
    </Stack.Navigator>
  );
}
export default StackApplyScreen;
