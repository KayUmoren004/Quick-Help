import React, { useContext, useEffect } from "react";

//Dependencies
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { UserContext } from "../../Context/User/UserContext";
import { FirebaseContext } from "../../Context/Firebase/FirebaseContext";

const Loading = () => {
  //Theme
  const { colors } = useTheme();
  //Contexts
  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  //On Render
  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          isLoggedIn: true,
          Email: userInfo.email,
          uid: user.uid,
          name: userInfo.name,
        });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 500);
  }, []);
  return (
    <View style={[styles.container, { color: colors.background }]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
