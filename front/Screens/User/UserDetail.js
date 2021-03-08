import React from 'react';
import UserProfile from '../../Components/UserProfile';
import { View, Text, Image, StyleSheet } from 'react-native';
const UserDetail = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UserProfile />
    </View>
  );
};
const styles = StyleSheet.create({});
export default UserDetail;
