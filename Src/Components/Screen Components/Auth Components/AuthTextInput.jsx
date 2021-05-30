import React, { forwardRef, RefObject, useRef } from "react";

//Dependencies
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import Colors from "../../Utils/Colors/colors";
import { Feather as Icon } from "@expo/vector-icons";

const AuthTextInput = forwardRef(
  (
    {
      primaryColor = "",
      TextColor = "",
      touched = false,
      error = "",
      color = !touched ? "darkgrey" : error ? "red" : "green",
      ...props
    },
    ref
  ) => (
    //

    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
          height: 60,
          width: 375,
          borderColor: color,
          borderWidth: 1,
          borderTopColor: primaryColor,
          borderLeftColor: primaryColor,
          borderRightColor: primaryColor,
        },
      ]}
    >
      <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#d8d8d8"
          {...{ ref }}
          {...props}
          style={([styles.input], { color: TextColor, width: 375 })}
        />
      </View>
      {touched && (
        <View
          style={{
            borderRadius: 12.5,
            height: 10 * 2.5,
            width: 10 * 2.5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: !error ? "green" : "red",
            marginRight: 10,
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <Icon
            name={!error ? "check" : "x"}
            color="white"
            size={16}
            style={{ textAlign: "center" }}
          />
        </View>
      )}
    </View>
  )
);

export default AuthTextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "stretch",
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
});
