import React from "react";

//Dependencies
import Routes from "./Src/Stacks/Routes";
import { StatusBar } from "react-native";
import { UserProvider } from "./Src/Components/Context/User/UserContext";
import { FirebaseProvider } from "./Src/Components/Context/Firebase/FirebaseContext";
import Test from "./Test";
// import * as Font from "expo-font";
// import { useFonts } from "@use-expo/font";

export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Routes />
        {/* ˚<Test /> */}
        <StatusBar barStyle="default" />
      </UserProvider>
    </FirebaseProvider>
  );
};
