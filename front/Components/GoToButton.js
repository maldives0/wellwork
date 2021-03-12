import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function GoToButton({ screenName, size, color, marginLeft }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Text
          style={{
            color: color,
            fontSize: size,
            marginLeft: marginLeft ? marginLeft : 0,
          }}
        >
          {screenName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
