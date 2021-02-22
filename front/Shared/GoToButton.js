import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        color="#348f50"
        title={screenName}
        onPress={() => navigation.navigate(screenName)}
      />
    </View>
  );
}
