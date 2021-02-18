import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GoToButton from '../../test/GoToButton';
import {BasicButton} from '../../Shared/BasicStyles';
function LoginForm({route, navigation}) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [codeErrorMessage, setCodeErrorMessage] = useState('');

  const onSubmitPhone = useCallback(async () => {
    try {
      if (!phoneErrorMessage) {
        setPhoneErrorMessage('전화번호를 확인해주세요.');
      }
      // await axios.post(`${Root_URL}/createUser`,{
      // phone :  phone, code: code
      // });
      // await axios.post(`${Root_URL}/requestOneTimePassword`,{
      // phone :  phone, code: code
      // });
    } catch (err) {
      console.error(err);
    }
  }, []);
  const onSubmitCode = useCallback(async () => {
    try {
      if (!codeErrorMessage) {
        setCodeErrorMessage('확인코드를 확인해주세요.');
      }

      // let {data} = await axios.post(`${Root_URL}/verifyOneTimePassword`,{
      // phone :  phone, code: code
      // });
      // firbase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GoToButton screenName="휴대번호 로그인" />

      <Text>kakao로 로그인하기</Text>
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

export default LoginForm;
