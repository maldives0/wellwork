import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
