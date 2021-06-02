import React, { useContext } from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../Components/Context/User/UserContext";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import AuthStackScreens from "./AuthStackScreens";
import MainStackScreen from "./MainStackScreens";
import Loading from "../Components/Screen Components/Loading/Loading";
import { useTheme } from "@react-navigation/native";

const AppStackScreens = () => {
  //Stack
  const AppStack = createStackNavigator();
  //User Context
  const [User] = useContext(UserContext);
  //Theme
  const { colors } = useTheme();
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.inactive,
          backgroundColor: colors.primary,
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "400",
        },
      }}
    >
      {User.isLoggedIn === null ? (
        <AppStack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
      ) : User.isLoggedIn ? (
        <AppStack.Screen name="Quick Help" component={MainStackScreen} />
      ) : (
        <AppStack.Screen
          name="Auth"
          component={AuthStackScreens}
          options={{ headerShown: false }}
        />
      )}
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
