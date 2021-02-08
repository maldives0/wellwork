import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// // Redux
// import { Provider } from 'react-redux';
// import store from './Redux/store';

// // Context API
// import Auth from './Context/store/Auth';

// Navigatiors
import Main from './Navigators/Main';

// Screens
import Header from './Shared/Header';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </>
  );
};

export default App;
