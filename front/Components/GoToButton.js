import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        color="#348f50"
        onPress={() => navigation.navigate(screenName)}
      >
        <Text>{screenName}</Text>
      </TouchableOpacity>
    </View>
  );
}
