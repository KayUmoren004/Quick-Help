import React, { useEffect, useState } from "react";

//Dependencies
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Screens
import Onboarding from "../Components/Screen Components/OnBoarding/Onboarding";
import AppStackScreens from "../Stacks/AppStackScreens";
import Loading from "../Components/Screen Components/Loading/Loading";
import DarkTheme from "../Components/Utils/Colors/Dark/DarkTheme";
import LightTheme from "../Components/Utils/Colors/Light/LightTheme";

const Routes = () => {
  //Nav Stacks
  const RoutesStack = createStackNavigator();
  //Color Scheme
  const scheme = useColorScheme();
  //States
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  //Onboarding Function
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log("Error @checkOnboarding: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  const renderOnboarding = () => {
    return <Onboarding setSeen={setViewedOnboarding} />;
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
        <RoutesStack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}
        >
          {loading ? (
            <RoutesStack.Screen name="Loading" component={Loading} />
          ) : viewedOnboarding ? (
            <RoutesStack.Screen name="App" component={AppStackScreens} />
          ) : (
            <RoutesStack.Screen
              name="On Boarding"
              component={renderOnboarding}
            />
          )}
        </RoutesStack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default Routes;
