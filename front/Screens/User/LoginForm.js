import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
  View,
} from 'react-native';
import ApplyCalendarPicker from '../../Shared/ApplyCalendarPicker';

function LoginForm({route, navigation}) {



  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>
          login
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,

    marginBottom: 10,
  },
});

export default LoginForm;
