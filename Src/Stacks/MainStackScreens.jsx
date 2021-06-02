import React, { useContext, useEffect } from "react";

//Dependencies
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { UserContext } from "../Components/Context/User/UserContext";

//Screens
import Home from "../Screens/AppScreens/Home/Home";
import Search from "../Screens/AppScreens/Search/Search";
import Trending from "../Screens/AppScreens/Trending/Trending";
import Buy from "../Screens/AppScreens/Buy/Buy";
import Profile from "../Screens/AppScreens/Profile/Profile";

const MainStackScreens = ({ navigation, route }) => {
  //Theme
  const { colors } = useTheme();
  //Stack
  const Tab = createBottomTabNavigator();

  //Context
  const [user, _] = useContext(UserContext);

  //set title
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Quick Help";
    switch (routeName) {
      case "Home":
        return "Quick Help";
      case "Search":
        return "Search";
      case "Trending":
        return "Trending";
      case "Buy":
        return "Buy";
      case "Profile":
        return user.name;
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  //Tab bar options
  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: colors.primary,
      paddingBottom: 12,
      //borderTopWidth: 0,
      borderTopColor: colors.inactive,
    },
  };

  //Screen Options
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "home";

      switch (route.name) {
        case "Home":
          iconName = "home";
          break;
        case "Search":
          iconName = "search";
          break;
        case "Trending":
          iconName = "trending-up";
          break;
        case "Buy":
          iconName = "shopping-bag";
          break;
        case "Profile":
          iconName = "user";
          break;
        default:
          iconName = "home";
      }
      return (
        <Icon
          name={iconName}
          size={24}
          color={focused ? colors.text : colors.navButton}
        />
      );
    },
  });

  const MainStack = createStackNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Buy" component={Buy} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainStackScreens;
