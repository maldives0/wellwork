import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ApplyHome from "@/Screens/Apply/ApplyHome";
import ApplyForm from "@/Screens/Apply/ApplyForm";

const StackApplyScreen = createStackNavigator();

function Apply() {
  return (
    <StackApplyScreen.Navigator>
      <StackApplyScreen.Screen
        name="ApplyHome"
        component={ApplyHome}
        options={{
          title: "근태 현황보기",
        }}
      />
      <StackApplyScreen.Screen
        name="ApplyForm"
        component={ApplyForm}
        options={{
          title: "근태 신청하기",
        }}
      />
    </StackApplyScreen.Navigator>
  );
}
export default Apply;
