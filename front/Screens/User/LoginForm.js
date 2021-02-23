import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AuthInput from '../../Components/AuthInput';
import useInput from '../../hooks/useInput';
import GoToButton from '../../Components/GoToButton';
import { BasicButton } from '../../Components/BasicStyles';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}
const logCallback = (log, callback) => {
  console.log(log);
  callback;
};
const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

function LogInForm({ route, navigation }) {
  const emailInput = useInput('');
  const nicknameInput = useInput('');
  const passwordInput = useInput('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const onSubmit = async () => {
    const { value: email } = emailInput;
    const { value: nickname } = nicknameInput;
    const { value: password } = passwordInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      return Alert.alert('유효하지 않은 이메일입니다.');
    }
    if (nickname === '') {
      return Alert.alert('닉네임을 입력해 주세요.');
    }
    if (password === '') {
      return Alert.alert('패스워드를 입력해 주세요.');
    }
    try {
    } catch (err) {
      console.dir(err);
    }
  };
  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false),
          );
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowstyle}>
        <AuthInput
          style={styles.inputLayout}
          leftIcon={{ type: 'antdesign', name: 'mail' }}
          onChangeText={(email) => setEmail(email)}
          // errorStyle={{ color: 'red', fontSize: 16 }}
          // errorMessage={emailErrorMessage}
          placeholder="이메일"
        />
      </View>
      <View style={styles.rowstyle}>
        {/* <Input
          style={styles.inputLayout}
          value={password}
          rightIcon={{ type: 'antdesign', name: 'eyeo' }}
          leftIcon={{ type: 'antdesign', name: 'key' }}
          onChangeText={(password) => setPassword(password)}
          // errorStyle={{ color: 'red', fontSize: 16 }}
          // errorMessage={passwordErrorMessage}
          placeholder="비밀번호"
        /> */}
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmit}>
          <Text style={styles.buttonText}>로그인</Text>
        </BasicButton>
      </View>
      <View style={styles.rowstyle}>
        <Text style={styles.registerInfo}>아직 회원이 아니신가요?</Text>
        <GoToButton screenName="회원가입하기" />
      </View>
      <View>
        <Text style={styles.anotherInfo}>다른 방식으로 로그인하기</Text>
        <View style={styles.rowstyle}>
          <GoToButton screenName="휴대폰번호" />
          <GoToButton screenName="카카오" />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    alignContent: 'center',
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

export default LogInForm;
