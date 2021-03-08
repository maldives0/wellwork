import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import GoToButton from '../../Components/GoToButton';

function Register({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.registerInfo}>
        <GoToButton screenName="이메일로 가입하기" />
      </View>
      <View style={styles.registerInfo}>
        <GoToButton screenName="휴대폰번호로 가입하기" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  registerInfo: {
    marginBottom: 26,
  },
});

export default Register;
