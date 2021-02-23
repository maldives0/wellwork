import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Alert,
  Form,
  TextInput,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AuthInput from '../../Components/AuthInput';
import useInput from '../../hooks/useInput';
import GoToButton from '../../Components/GoToButton';
import { BasicButton } from '../../Components/BasicStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const inputRef = () => {
  const ref = useRef(null);
  const onSubmitEditing = () => {
    ref.current.focus();
  };
  return { ref, onSubmitEditing };
};

function RegisterForm({ route, navigation }) {
  const ref1 = inputRef();
  const ref2 = inputRef();
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [email, onChangeEmail, setEmail] = useInput('');

  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck, setPasswordCheck] = useInput('');

  const [loginLoading, setLoginLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNickname, setErrorNickname] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordCheck, setErrorPasswordCheck] = useState('');

  const onSubmit = async () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !email.trim() || !emailRegex.test(email)) {
      return setErrorEmail('유효하지 않은 이메일입니다.');
    }
    if (!nickname || !nickname.trim()) {
      return setErrorNickname('닉네임을 입력해 주세요.');
    }
    if (!password || !password.trim()) {
      return setErrorPassword('패스워드를 입력해 주세요.');
    }
    if (password !== passwordCheck) {
      return setErrorPasswordCheck('입력하신 비밀번호와 일치하지 않습니다.');
    }
    try {
      // console.warn(email, nickname, password);

      setErrorEmail('');
      setErrorNickname('');
      setErrorPassword('');
      setErrorPasswordCheck('');
      setEmail('');
      setNickname('');
      setPassword('');
      setPasswordCheck('');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.scrollView}
        scrollEnabled={false}
      >
        <View>
          <TextInput
            // {...ref1}
            value={email}
            onChangeText={onChangeEmail}
            autoFocus
            ref={(input) => {
              console.log('input1', input);
            }}
            // onSubmitEditing={() => {
            //   ref2.current.focus();
            // }}
            returnKeyType="next"
            placeholder="이메일"
          />
          <TextInput
            // {...ref2}
            value={nickname}
            onChangeText={onChangeNickname}
            // ref={ref2}
            // onSubmitEditing={() => null}
            returnKeyType="done"
            placeholder="닉네임"
          />
        </View>
        {/* <View style={styles.rowstyle}>
          <AuthInput
            ref={ref1}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            returnKeyType="go"
            autoCorrect={false}
            autoFocus={true}
            errorMessage={errorEmail}
            leftIcon={{ type: 'antdesign', name: 'mail' }}
            placeholder="이메일"
            onSubmitEditing={() => ref2.current?.focus()}
          />
        </View>
        <View style={styles.rowstyle}>
          <AuthInput
            ref={ref2}
            onSubmitEditing={() => ref3.current?.focus()}
            onChangeText={onChangeNickname}
            autoCapitalize="words"
            errorMessage={errorNickname}
            placeholder="닉네임"
            leftIcon={{ type: 'antdesign', name: 'user' }}
          />
        </View> */}
        <View style={styles.rowstyle}>
          <AuthInput
            ref={ref3}
            onSubmitEditing={() => ref4.current?.focus()}
            onChangeText={onChangePassword}
            keyboardType="email-address"
            returnKeyType="go"
            autoCorrect={false}
            errorMessage={errorPassword}
            leftIcon={{ type: 'antdesign', name: 'key' }}
            rightIcon={{ type: 'antdesign', name: 'eyeo' }}
            placeholder="비밀번호"
          />
        </View>
        <View style={styles.rowstyle}>
          <AuthInput
            ref={ref4}
            onChangeText={onChangePasswordCheck}
            keyboardType="email-address"
            returnKeyType="go"
            autoCorrect={false}
            errorMessage={errorPasswordCheck}
            leftIcon={{ type: 'antdesign', name: 'key' }}
            rightIcon={{ type: 'antdesign', name: 'eyeo' }}
            placeholder="비밀번호 확인하기"
            blurOnSubmit={true}
          />
        </View>

        <View style={styles.buttonAreaLayout}>
          <BasicButton type="submit" onPress={onSubmit}>
            <Text style={styles.buttonText}>가입하기</Text>
          </BasicButton>
        </View>
      </KeyboardAwareScrollView>
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
  scrollView: {
    padding: 16,
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
    marginBottom: 6,
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
