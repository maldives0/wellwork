import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Text style={{ color: "#000" }}>{screenName}</Text>
      </TouchableOpacity>
    </View>
  );
}
