import React from 'react';

import StackMainScreen from '../Navigators/StackMainScreen';
import StackAuthScreen from '../Navigators/StackAuthScreen';

export default ({ isLoggedIn }) => {
  return isLoggedIn ? <StackMainScreen /> : <StackAuthScreen />;
};
