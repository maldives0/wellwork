import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../Screens/Auth/Register';
import RegisterEmail from '../Screens/Auth/RegisterEmail';
import RegisterOTP from '../Screens/Auth/RegisterOTP';
import LoginOTP from '../Screens/Auth/LoginOTP';

const StackRegister = createStackNavigator();

function StackRegisterScreen() {
  return (
    <StackRegister.Navigator>
      <StackRegister.Screen
        name="회원가입 방법 선택하기"
        component={Register}
      />
      <StackRegister.Screen
        name="이메일로 가입하기"
        component={RegisterEmail}
      />
      <StackRegister.Screen
        name="휴대폰번호로 가입하기"
        component={RegisterOTP}
      />
      <StackRegister.Screen name="확인코드 입력하기" component={LoginOTP} />
    </StackRegister.Navigator>
  );
}
export default StackRegisterScreen;
