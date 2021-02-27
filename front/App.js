import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Navigatiors
import Main from "./Navigators/Main";

// Screens

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
