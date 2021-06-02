import React from "react";

//Dependencies
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import FormButton from "../Forms/FormButton";
import Colors from "../../Utils/Colors/colors";
const AuthFooter = ({ Name, Message, onPress, action, navigate }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 32 }}>
        <Text style={[styles.Text, { color: colors.text }]}>{Message}</Text>
        <Text> </Text>
        <TouchableOpacity onPress={navigate}>
          <Text style={styles.buttonText}>{action}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.AuthButton,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
  },
  Text: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
  },
});
