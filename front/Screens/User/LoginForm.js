import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

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
  const ref_input = [];
  ref_input[0] = useRef();
  ref_input[1] = useRef();

  const focusNext = (index) => {
    if (index < ref_input.length - 1) {
      ref_input[index + 1].current.focus();
    }
    if (index == ref_input.length - 1) {
      ref_input[index].current.blur();
    }
  };
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [misMatchError, setMisMatchError] = useState(false);
  const [isSecureText, setIsSecureText] = useState(true);
  const onSubmit = async () => {
    try {
      setEmail('');

      setPassword('');
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
        <Input
          onChangeText={onChangeEmail}
          keyboardType={'email-address'}
          autoCorrect={false}
          autoFocus={true}
          leftIcon={{
            type: 'antdesign',
            name: 'user',
          }}
          placeholder="이메일"
          ref={ref_input[0]}
          onSubmitEditing={(text) => focusNext(0)}
          clearTextOnFocus={true}
          onFocus={() => setEmail('')}
          // onKeyPress={(e) => focusPrev(e.nativeEvent.key, 0)}
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.rowstyle}>
        <Input
          ref={ref_input[1]}
          onSubmitEditing={(text) => focusNext(1)}
          // onKeyPress={(e) => focusPrev(e.nativeEvent.key, 2)}
          onChangeText={onChangePassword}
          autoCorrect={false}
          leftIcon={{ type: 'antdesign', name: 'key' }}
          rightIcon={{
            type: 'antdesign',
            name: isSecureText ? 'eye' : 'eyeo',
            onPress: () => setIsSecureText((prev) => !prev),
          }}
          placeholder="비밀번호"
          autoCapitalize={'none'}
          secureTextEntry={isSecureText}
        />
      </View>
      <View style={styles.buttonAreaLayout}>
        <Text style={styles.buttonText}>
          {misMatchError && '이메일 또는 비밀번호가 일치하지 않습니다.'}
        </Text>
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
