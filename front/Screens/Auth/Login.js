import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import { Input } from 'react-native-elements';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import initialUser from '../../assets/store';
import produce from 'immer';
import useInput from '../../hooks/useInput';
import GoToButton from '../../Components/GoToButton';
import { BasicButton, CloseButtonCoord } from '../../Components/BasicStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';

function LogInForm({ route, navigation }) {
  const { data: userData, error } = useSWR('globalState', {
    initialData: initialUser,
  });

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

  const [email, onChangeEmail, onResetEmail, setEmail] = useInput('');

  const [password, onChangePassword, onResetPassword, setPassword] = useInput(
    '',
  );
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
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formLayout}>
          <View style={styles.rowstyle}>
            <Input
              value={email}
              onChangeText={onChangeEmail}
              keyboardType={'email-address'}
              autoCorrect={false}
              leftIcon={{
                type: 'antdesign',
                name: 'user',
              }}
              placeholder="이메일"
              ref={ref_input[0]}
              onSubmitEditing={(text) => focusNext(0)}
              clearTextOnFocus={true}
            
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
              value={password}
              onChangeText={onChangePassword}
              ref={ref_input[2]}
              onSubmitEditing={(text) => focusNext(2)}
              // onKeyPress={(e) => focusPrev(e.nativeEvent.key, 2)}
              onChangeText={onChangePassword}
              autoCorrect={false}
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
          <View>
            {misMatchError && (
              <Text style={styles.buttonText}>
                '이메일 또는 비밀번호가 일치하지 않습니다.'
              </Text>
            )}
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
          <View style={styles.rowstyle}>
          <GoToButton screenName="카카오 로그인" />
              <GoToButton screenName="사용자 정보" />
            </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formLayout: {
    padding: 24,
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

export default LogInForm;
