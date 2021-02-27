import React, { useState, useCallback, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import GoToButton from '../../Components/GoToButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { BasicButton, CloseButtonCoord } from '../../Components/BasicStyles';
import useInput from '../../hooks/useInput';

function OTPForm({ route, navigation }) {
  const Root_URL =
    'https://us-central1-one-time-password-24b66.cloudfunctions.net';

  const [phone, onChangePhone, onResetPhone, setPhone] = useInput('');

  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  const onSubmitPhone = useCallback(async () => {
    try {
      if (!phone || !phone.trim()) {
        return setPhoneErrorMessage('전화번호를 확인해주세요.');
      }
      await axios.post(`${Root_URL}/createUser`, {
        phone: phone,
      });
      await axios.post(`${Root_URL}/requestOneTimePassword`, {
        phone: phone,
      });
      navigation.navigate('OTPLoginForm', { phone });
    } catch (err) {
      console.dir(err);
      console.error(err);
    }
  }, [phone]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Input
              value={phone}
              onChangeText={onChangePhone}
              leftIcon={{ type: 'antdesign', name: 'mobile1' }}
              keyboardType={'numeric'}
              errorMessage={phoneErrorMessage}
              placeholder="전화번호"
            />
            <CloseButtonCoord>
              {phone && (
                <AntDesign
                  name="closecircle"
                  color="grey"
                  size={16}
                  onPress={onResetPhone}
                />
              )}
            </CloseButtonCoord>
          </View>
          <View style={styles.buttonAreaLayout}>
            <BasicButton onPress={onSubmitPhone}>
              <Text style={styles.buttonText}>확인</Text>
            </BasicButton>
          </View>
          <GoToButton screenName="확인코드 입력하기" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
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

export default OTPForm;
