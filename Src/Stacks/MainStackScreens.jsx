import React, { useContext, useEffect } from "react";

//Dependencies
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Screens/AppScreens/Home/Home";
import Search from "../Screens/AppScreens/Search/Search";
import Trending from "../Screens/AppScreens/Trending/Trending";
import Buy from "../Screens/AppScreens/Buy/Buy";
import Profile from "../Screens/AppScreens/Profile/Profile";

const MainStackScreens = () => {
  //Stack
  const BottomStack = createStackNavigator();

  const BarNavigator = () => {
    return (
      <BottomStack.Navigator>
        <BottomStack.Screen name="Home" component={Home} />
        <BottomStack.Screen name="Search" component={Search} />
        <BottomStack.Screen name="Trending" component={Trending} />
        <BottomStack.Screen name="Buy" component={Buy} />
        <BottomStack.Screen name="Profile" component={Profile} />
      </BottomStack.Navigator>
    );
  };

  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="App" component={BarNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
