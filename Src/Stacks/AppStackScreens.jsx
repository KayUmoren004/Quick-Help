import React, { useContext } from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../Components/Context/User/UserContext";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import AuthStackScreens from "./AuthStackScreens";
import MainStackScreen from "./MainStackScreens";
import Loading from "../Components/Screen Components/Loading/Loading";

const AppStackScreens = () => {
  //Stack
  const AppStack = createStackNavigator();
  //User Context
  const [User] = useContext(UserContext);
  return (
    <AppStack.Navigator headerMode="none">
      {User.isLoggedIn === null ? (
        <AppStack.Screen name="Loading" component={Loading} />
      ) : User.isLoggedIn ? (
        <AppStack.Screen name="App" component={MainStackScreen} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthStackScreens} />
      )}
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
