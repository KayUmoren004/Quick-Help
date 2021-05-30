import React from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
