import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Text style={{ marginLeft: 10, marginRight: 10, color: '#348f50' }}>
          {screenName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
