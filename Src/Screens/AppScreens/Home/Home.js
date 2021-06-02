import React from "react";

//Dependencies
import { StyleSheet, Text, View } from "react-native";
import Request from "./Requested/Index";
import Status from "./Status/Index";
import Recent from "./Recent/Index";
import { useTheme } from "@react-navigation/native";

const Home = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View
        style={[
          styles.Parts,
          {
            borderBottomColor: colors.placeholder,
            borderWidth: 0.5,
            borderTopColor: colors.background,
            borderLeftColor: colors.background,
            borderRightColor: colors.background,
          },
        ]}
      >
        <Recent />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={[
            styles.Parts,
            {
              borderRightColor: colors.placeholder,
              borderWidth: 0.25,
              marginTop: 10,
              borderTopColor: colors.background,
              borderLeftColor: colors.background,
              borderBottomColor: colors.background,
            },
          ]}
        >
          <Request />
        </View>
        <View
          style={[
            styles.Parts,
            {
              borderLeftColor: colors.placeholder,
              borderWidth: 0.25,
              marginTop: 10,
              borderTopColor: colors.background,
              borderRightColor: colors.background,
              borderBottomColor: colors.background,
            },
          ]}
        >
          <Status />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  Parts: {
    width: "100%",
    flex: 1,
    padding: 2,
  },
});
