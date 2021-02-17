import axios from 'axios';
import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  SafeAreaView,
   View,
} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';
import firbase from 'firbase';

function RegisterForm({route, navigation}) {
const[phoneNum, setPhoneNum] = useState('');
const[code, setCode] = useState('');
const onSubmit = useCallback(async()=>{
try{
let {data} = await axios.post(`${Root_URL}/verifyOneTimePassword`,{
phone :  phoneNum, code: code
});
firbase.auth().signInWithCustomToken(data.token);
}
catch(err){
console.error(err);
}
},[]);
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <FormLabel>휴대전화번호:</FormLabel>
         <FormInput 
         value={phoneNum}
         onChangeText={phone=>setPhoneNum(phone)}
         />          
        </View>
      <View >
        <FormLabel>확인코드:</FormLabel>
         <FormInput 
         value={code}
         onChangeText={code=>setCode(code)}
         />          
        </View>
        <Button onPress={} title="확인하기" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,

    marginBottom: 10,
  },
});

export default RegisterForm;
