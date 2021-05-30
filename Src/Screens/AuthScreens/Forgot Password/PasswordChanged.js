import React, { useContext, useRef, useState } from "react";

//Dependencies
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { useTheme } from "@react-navigation/native";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";

const PasswordChanged = ({ navigation }) => {
  //States
  const [loading, setLoading] = useState(false);
  //Loading Component
  const Loading = () => {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  };
  //Footer Component
  const footer = (
    <>
      {loading && <Loading />}
      {!loading && (
        <AuthFooter
          Name="Sign In again"
          onPress={() => {
            navigation.navigate("Login");
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
        />
      )}
    </>
  );
  return (
    <AuthContainer
      text="Email Confirmation"
      description1="An email has been sent for password reset"
      {...{ footer }}
    ></AuthContainer>
  );
};

export default PasswordChanged;
