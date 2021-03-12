import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserDetail from "@/Screens/User/UserDetail";
import ChangeUserInfo from "@/Screens/User/ChangeUserInfo";

const StackUserScreen = createStackNavigator();

function User() {
  return (
    <StackUserScreen.Navigator initialRouteName="근무시간">
      <StackUserScreen.Screen name="프로필" component={UserDetail} />
      <StackUserScreen.Screen
        name="개인정보 변경하기"
        component={ChangeUserInfo}
      />
    </StackUserScreen.Navigator>
  );
}
export default User;
