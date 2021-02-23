import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// // Context API
// import Auth from './Context/store/Auth';

// Navigatiors
import Main from './Navigators/Main';

// Screens
import Header from './Components/Header';
import firebase from 'firebase';
const App = () => {
  // useEffect(() => {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyAtPaikIcrL0kv7mhiIAAU3VG5yDsbrWRE",
  //     authDomain: "one-time-password-24b66.firebaseapp.com",
  //     projectId: "one-time-password-24b66",
  //     storageBucket: "one-time-password-24b66.appspot.com",
  //     messagingSenderId: "929628334261",
  //     appId: "1:929628334261:web:e973d444177fd9b23d36fc",
  //     measurementId: "G-BFF6K22ZST",
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }, []);
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
};

export default App;
