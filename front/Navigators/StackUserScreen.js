import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';
import LoginForm from '../Screens/User/LoginForm';
import RegisterForm from '../Screens/User/RegisterForm';
import UserProfile from '../Screens/User/UserProfile';

const Stack = createStackNavigator();

function StackApplyScreen() {
  // useEffect(() => {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyAtPaikIcrL0kv7mhiIAAU3VG5yDsbrWRE',
  //     authDomain: 'one-time-password-24b66.firebaseapp.com',
  //     projectId: 'one-time-password-24b66',
  //     storageBucket: 'one-time-password-24b66.appspot.com',
  //     messagingSenderId: '929628334261',
  //     appId: '1:929628334261:web:e973d444177fd9b23d36fc',
  //     measurementId: 'G-BFF6K22ZST',
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="로그인"
        component={LoginForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="휴대번호 로그인"
        component={RegisterForm}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="프로필"
        component={UserProfile}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
export default StackApplyScreen;
