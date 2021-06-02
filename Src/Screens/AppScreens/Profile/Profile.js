import React, { useContext } from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../../Components/Context/User/UserContext";
import { useTheme } from "@react-navigation/native";

const Profile = () => {
  const [user, _] = useContext(UserContext);
  //Theme
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Profile</Text>
      <Text style={{ color: colors.text }}>{user.name}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
