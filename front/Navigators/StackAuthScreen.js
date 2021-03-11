import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "@/Screens/Auth/Login";
import RegisterEmail from "@/Screens/Auth/RegisterEmail";
import LoginKakao from "@/Screens/Auth/LoginKakao";
import UserInfo from "@/Screens/Auth/UserInfo";

const StackAuthScreen = createStackNavigator();

function Auth() {
  return (
    <StackAuthScreen.Navigator initialRouteName="로그인">
      <StackAuthScreen.Screen name="로그인" component={Login} />
      <StackAuthScreen.Screen name="회원가입하기" component={RegisterEmail} />
      <StackAuthScreen.Screen name="카카오 로그인" component={LoginKakao} />
      <StackAuthScreen.Screen name="사용자 정보" component={UserInfo} />
    </StackAuthScreen.Navigator>
  );
}
export default Auth;
