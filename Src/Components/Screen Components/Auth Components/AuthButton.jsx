import React from "react";

//Dependencies
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../Utils/Colors/colors";

const AuthButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: colors.AuthButton,
    width: 343,
    height: 56,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "center",
  },
});
