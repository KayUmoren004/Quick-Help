import React from "react";

//Dependencies
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Divider } from "react-native-paper";
const AuthContainer = ({
  children,
  footer,
  image,
  text,
  description1,
  description2,
}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/Logo.png")}
              style={{ resizeMode: "contain", height: "30%", width: "100%" }}
            />

            <View style={styles.Children}>{children}</View>
            <View style={styles.Footer}>{footer}</View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    //height: 44,
    //width: 44,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 92,
  },
  TextContainer: {
    marginTop: 35,
  },
  Text: {
    width: 343,
    height: 41,
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
    textAlign: "center",
    marginHorizontal: 16,
  },
  DescriptionContainer: {
    marginTop: 16,
    marginBottom: 40,
  },
  Description: {
    width: 343,
    height: 44,
    marginHorizontal: 16,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  Children: {
    width: "100%",
    justifyContent: "center",
    //alignItems: "center",
  },
  Footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
