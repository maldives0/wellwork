import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "react-native-vector-icons/AntDesign";
import WorkingTime from "@/Screens/Work/WorkingTime";
import StackUserScreen from "./StackUserScreen";
import StackApplyScreen from "./StackApplyScreen";

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName, iconSize, iconColor;
  if (name === "WorkingTime") {
    iconName = "dashboard";
  } else if (name === "StackApplyScreen") {
    iconName = "calendar";
  } else if (name === "StackUserScreen") {
    iconName = "user";
  }
  iconSize = focused ? 34 : 24;
  iconColor = focused ? "#348F50" : "gray";
  return <AntDesign size={iconSize} name={iconName} color={iconColor} />;
};
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="WorkingTime"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#348F50",
        inactiveTintColor: "gray",
        style: { height: 60 },
      }}
    >
      <Tab.Screen name="WorkingTime" component={WorkingTime} />
      <Tab.Screen name="StackApplyScreen" component={StackApplyScreen} />
      <Tab.Screen name="StackUserScreen" component={StackUserScreen} />
    </Tab.Navigator>
  );
};
export default Main;
