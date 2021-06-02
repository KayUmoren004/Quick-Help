import React from "react";
import { StyleSheet, Text } from "react-native";

import Colors from "../../Utils/colors";

export default function FormErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    marginRight: 10,
    color: Colors.red,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
    alignSelf: "flex-end",
  },
});
