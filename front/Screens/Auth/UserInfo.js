import React, { useCallback, useState } from 'react';
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

import axios from 'axios';
import useSWR, { mutate } from 'swr';
import initialUser from '../../assets/store';
import { Container, Header, Content, Picker, Form, Item, Input,Label } from "native-base";
import useInput from '../../hooks/useInput';
import DatePicker from '../../Components/DatePicker';
import { BasicButton, CloseButtonCoord } from '../../Components/BasicStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';

function UserInfo({ route, navigation }) {
  const { data: userData, error } = useSWR('globalState', {
    initialData: initialUser,
  });



  const [phone, onChangePhone,onResetPhone, setPhone] = useInput('');
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

 
const onDeptValueChange = useCallback((e)=>{
    console.log(e)
    setSelectedDept(e)
},[])
  const onSubmit = async () => {
    try {
        console.log(selectedDate.toString().substr(4, 12))
      setEmail('');
      setPassword('');
    } catch (err) {
      console.dir(err);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
       <Container>
       <Header />
       <Content>
      <Form>
      <Label>전화번호</Label>
      <Item rounded>
      
            <Input value={phone} onChangeText={onChangePhone}/>
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
          </Item>
          <Label>소속 부서</Label>
            <Picker
              mode="dropdown"
              placeholder="소속 부서를 선택해주세요"
              iosIcon={<AntDesign name="down" />}
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={selectedDept}
              onValueChange={onDeptValueChange}
            >
              <Picker.Item label="CEO" value="A" />
              <Picker.Item label="경영" value="B" />
              <Picker.Item label="영업" value="C" />
              <Picker.Item label="개발" value="D" />
              <Picker.Item label="디자인" value="E" />
              <Picker.Item label="마케팅" value="F" />
            </Picker>
            <Label>입사일</Label>
            <DatePicker 
            value={selectedDate}
          
            />
               <View style={styles.buttonAreaLayout}>
              <BasicButton type="submit" onPress={onSubmit}>
                <Text style={styles.buttonText}>입력</Text>
              </BasicButton>
            </View>
          </Form>
          </Content>
       </Container>
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

export default UserInfo;
