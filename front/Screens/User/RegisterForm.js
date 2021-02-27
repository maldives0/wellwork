import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import GoToButton from '../../Components/GoToButton';

function RegisterForm({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.rowstyle}>
          <Text style={styles.registerInfo}>아직 회원이 아니신가요?</Text>
          <GoToButton screenName="이메일로 가입하기" />
        </View>
        <View>
          <Text style={styles.anotherInfo}>다른 방식으로 로그인하기</Text>
          <View style={styles.rowstyle}>
            <GoToButton screenName="휴대폰번호로 가입하기" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
  },
  formLayout: {
    padding: 26,
    flex: 1,

    justifyContent: 'center',
  },

  inputLayout: {
    padding: 10,
    fontSize: 20,
  },
  registerInfo: {
    fontSize: 16,
    textAlign: 'center',
  },
  anotherInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  rowstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  buttonAreaLayout: {
    fontSize: 20,
    flexDirection: 'row-reverse',
    marginBottom: 36,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 0,
    borderWidth: 0,
  },
});

export default RegisterForm;
