import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavController from './Components/NavController';
import initialUser from './assets/store';
import useSWR from 'swr';

const App = () => {
  const { data: userData, error } = useSWR('globalState', {
    initialData: initialUser,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   if (userData.me) setIsLoggedIn(true);
  // }, [userData.me]);
  return (
    <NavigationContainer>
      <NavController isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default App;
