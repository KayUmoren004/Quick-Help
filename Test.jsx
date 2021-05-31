import React from "react";
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
import { Divider } from "react-native-paper";
const Test = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/Logo.png")}
              style={{ resizeMode: "contain", height: "30%", width: "30%" }}
            />
            <TextInput style={{ borderWidth: 1, margin: 10, width: "100%" }} />
            <TextInput style={{ borderWidth: 1, margin: 10, width: "100%" }} />
            <Button title="Forgot Password?" />
            <Button title="Sign In" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Divider
                style={{
                  width: "100%",
                  backgroundColor: "#000",
                  marginHorizontal: 30,
                }}
              />
              <Text>OR</Text>
              <Divider
                style={{
                  width: "100%",
                  backgroundColor: "#000",
                  marginHorizontal: 30,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <Text>Test</Text>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    //alignItems: "center",
  },
});
