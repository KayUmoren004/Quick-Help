import React, { forwardRef, RefObject, useRef } from "react";

//Dependencies
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { useTheme } from "@react-navigation/native";
import Colors from "../../Utils/Colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AuthTextInput = ({
  leftIcon,
  width = "100%",
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          width,
          borderColor: "darkgrey",
          borderWidth: 1,
          //borderTopColor: colors.primary,
          //borderLeftColor: colors.primary,
          //borderRightColor: colors.primary,
        },
      ]}
    >
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={colors.text}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholderTextColor={Colors.mediumGrey}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={colors.text}
            style={styles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: Colors.lightGrey,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
  rightIconStyles: {
    alignSelf: "center",
    marginLeft: 10,
  },
});
