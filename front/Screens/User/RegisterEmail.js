import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { Input } from 'react-native-elements';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import useInput from '../../hooks/useInput';
import { BasicButton, CloseButtonCoord } from '../../Components/BasicStyles';
import AuthInput from '../../Components/AuthInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
const window = Dimensions.get('window');
function RegisterEmail({ route, navigation, props }) {
  const ref_input = [];
  ref_input[0] = useRef();
  ref_input[1] = useRef();
  ref_input[2] = useRef();
  ref_input[3] = useRef();

  const focusNext = (index) => {
    if (index < ref_input.length - 1) {
      ref_input[index + 1].current.focus();
    }
    if (index == ref_input.length - 1) {
      ref_input[index].current.blur();
    }
  };

  const [email, onChangeEmail, onResetEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, onResetNickname, setNickname] = useInput(
    '',
  );
  const [password, onChangePassword, onResetPassword, setPassword] = useInput(
    '',
  );
  const [
    passwordCheck,
    onChangePasswordCheck,
    onResetPasswordCheck,
    setPasswordCheck,
  ] = useInput('');

  const [loginLoading, setLoginLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNickname, setErrorNickname] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordCheck, setErrorPasswordCheck] = useState('');
  const [isSecureText, setIsSecureText] = useState(true);
  const [isResetText, setIsResetText] = useState(false);
  const onSubmit = async () => {
    setErrorEmail('');
    setErrorNickname('');
    setErrorPassword('');
    setErrorPasswordCheck('');
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

      setEmail('');
      setNickname('');
      setPassword('');
      setPasswordCheck('');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <KeyboardAwareScrollView
      extraHeight={300}
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      contentContainerStyle={{ height: -30 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      enableAutomaticScroll={true}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formLayout}>
            <View style={styles.rowstyle}>
              <Input
                value={email}
                onChangeText={onChangeEmail}
                keyboardType={'email-address'}
                autoCorrect={false}
                autoFocus={true}
                errorMessage={errorEmail}
                leftIcon={{
                  type: 'antdesign',
                  name: 'user',
                }}
                placeholder="이메일"
                ref={ref_input[0]}
                onSubmitEditing={(text) => focusNext(0)}
                autoCapitalize={'none'}
              />
              <CloseButtonCoord>
                {email && (
                  <AntDesign
                    name="closecircle"
                    color="grey"
                    size={16}
                    onPress={onResetEmail}
                  />
                )}
              </CloseButtonCoord>
            </View>
            <View style={styles.rowstyle}>
              <Input
                ref={ref_input[1]}
                onSubmitEditing={(text) => focusNext(1)}
                value={nickname}
                onChangeText={onChangeNickname}
                autoCapitalize={'words'}
                errorMessage={errorNickname}
                placeholder="닉네임"
                leftIcon={{
                  type: 'antdesign',
                  name: 'smileo',
                }}
              />
              <CloseButtonCoord>
                {nickname && (
                  <AntDesign
                    name="closecircle"
                    color="grey"
                    size={16}
                    onPress={onResetNickname}
                  />
                )}
              </CloseButtonCoord>
            </View>
            <View style={styles.rowstyle}>
              <Input
                value={password}
                onChangeText={onChangePassword}
                ref={ref_input[2]}
                onSubmitEditing={(text) => focusNext(2)}
                onChangeText={onChangePassword}
                autoCorrect={false}
                errorMessage={errorPassword}
                leftIcon={{
                  type: 'antdesign',
                  name: 'key',
                }}
                rightIcon={{
                  type: 'antdesign',
                  name: isSecureText ? 'eye' : 'eyeo',
                  onPress: () => setIsSecureText((prev) => !prev),
                }}
                placeholder="비밀번호"
                autoCapitalize={'none'}
                secureTextEntry={isSecureText}
              />
              <CloseButtonCoord>
                {password && (
                  <AntDesign
                    name="closecircle"
                    color="grey"
                    size={16}
                    onPress={onResetPassword}
                  />
                )}
              </CloseButtonCoord>
            </View>
            <View style={styles.rowstyle}>
              <Input
                ref={ref_input[3]}
                onSubmitEditing={(text) => focusNext(3)}
                value={passwordCheck}
                onChangeText={onChangePasswordCheck}
                autoCorrect={false}
                errorMessage={errorPasswordCheck}
                leftIcon={{ type: 'antdesign', name: 'key' }}
                rightIcon={{
                  type: 'antdesign',
                  name: isSecureText ? 'eye' : 'eyeo',
                  onPress: () => setIsSecureText((prev) => !prev),
                }}
                placeholder="비밀번호 확인하기"
                autoCapitalize={'none'}
                secureTextEntry={isSecureText}
              />
              <CloseButtonCoord>
                {passwordCheck && (
                  <AntDesign
                    name="closecircle"
                    color="grey"
                    size={16}
                    onPress={onResetPasswordCheck}
                  />
                )}
              </CloseButtonCoord>
            </View>

            <View style={styles.buttonAreaLayout}>
              <BasicButton type="submit" onPress={onSubmit}>
                <Text style={styles.buttonText}>가입하기</Text>
              </BasicButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: window.height * 1,
  },
  formLayout: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
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

export default RegisterEmail;
