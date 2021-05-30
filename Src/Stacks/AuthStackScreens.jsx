import React from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Login from "../Screens/AuthScreens/Login/Login";
import SignUp from "../Screens/AuthScreens/Signup/SignUp";
import ForgotPassword from "../Screens/AuthScreens/Forgot Password/ForgotPassword";

const AuthStackScreens = () => {
  //Nav Stack
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
