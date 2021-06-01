import React, { useContext, useEffect } from "react";

//Dependencies
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { UserContext } from "../Components/Context/User/UserContext";
import { FirebaseContext } from "../Components/Context/Firebase/FirebaseContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainStackScreens = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };

  return (
    <View style={styles.container}>
      <Text>MainStackScreens</Text>
      <TouchableOpacity onPress={logOut}>
        <Text>Logout</Text>
        <Image
          source={require("../../assets/LogoBg.png")}
          style={{
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainStackScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
