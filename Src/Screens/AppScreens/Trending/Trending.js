import React from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text>Trending</Text>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
