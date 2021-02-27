import React from 'react';
import { createStackNavigatitor } from '@react-navigation/stack';

import { View, Text, Image, StyleSheet } from 'react-native';
const UserProfile = ({ navigation, route }) => {
  const phone = route.params;
  console.log('phone', phone);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>profile</Text>
      <Text>{phone}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default UserProfile;
