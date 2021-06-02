import React from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";

const Buy = () => {
  return (
    <View style={styles.container}>
      <Text>Buy</Text>
    </View>
  );
};

export default Buy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
