import React, { useState, useCallback, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Alert,
  Keyboard,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GoToButton from '../../Components/GoToButton';
import { BasicButton, CloseButtonCoord } from '../../Components/BasicStyles';
import useInput from '../../hooks/useInput';

function OTPLoginForm({ route, navigation }) {
  const Root_URL =
    'https://us-central1-one-time-password-24b66.cloudfunctions.net';
  // const phone = route?.params?.phone;
  const phone = '01055002288';

  const [code, onChangeCode, onResetCode, setCode] = useInput('');

  const [codeErrorMessage, setCodeErrorMessage] = useState('');

  const onSubmitCode = useCallback(async () => {
    try {
      if (!code || !code.trim()) {
        return setCodeErrorMessage('코드번호를 다시 확인해주세요.');
      }
      console.log(phone, code);
      let { data } = await axios.post(`${Root_URL}/verifyOneTimePassword`, {
        phone: phone,
        code: code,
      });
      console.log(data.token);

      auth().signInWithCustomToken(data.token);
      Alert.alert('인증이 완료되었습니다.');
      // navigation.navigate('프로필', { phone });
    } catch (err) {
      console.dir(err);
      console.error(err);
    }
  }, [code]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formLayout}>
        <Input
          value={code}
          onChangeText={onChangeCode}
          keyboardType={'numeric'}
          leftIcon={{ type: 'antdesign', name: 'questioncircleo' }}
          errorMessage={codeErrorMessage}
          placeholder="코드번호"
        />
        <CloseButtonCoord>
          {code && (
            <AntDesign
              name="closecircle"
              color="grey"
              size={16}
              onPress={onResetCode}
            />
          )}
        </CloseButtonCoord>
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmitCode}>
          <Text style={styles.buttonText}>확인</Text>
        </BasicButton>
        <GoToButton screenName="휴대폰번호로 가입하기" />
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
  formLayout: {
    justifyContent: 'center',

    flexDirection: 'row',
    marginBottom: 6,
  },
  buttonAreaLayout: {
    fontSize: 20,
    flexDirection: 'row-reverse',
    marginBottom: 26,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default OTPLoginForm;
