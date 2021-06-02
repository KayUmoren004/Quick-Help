import React, { useContext, useRef, useState } from "react";

//Dependencies
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { useTheme } from "@react-navigation/native";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import AuthButton from "../../../Components/Screen Components/Auth Components/AuthButton";

const PasswordChanged = ({ navigation }) => {
  //Theme
  const { colors } = useTheme();
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

  return (
    <AuthContainer
      text="Email Confirmation"
      description1="An email has been sent for password reset"
    >
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={[styles.Text, { color: colors.text }]}>
            Email Confirmation
          </Text>
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={[styles.Description, { color: colors.text }]}>
            An email has been sent for password reset
          </Text>
        </View>
        <View style={styles.Footer}>
          {loading && <Loading />}
          {!loading && (
            <AuthButton
              title="Sign In again"
              onPress={() => {
                navigation.navigate("Login");
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
              }}
            />
          )}
        </View>
      </View>
    </AuthContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
  Description: {
    width: 343,
    height: 44,
    marginHorizontal: 16,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  TextContainer: {
    marginTop: 35,
  },
  DescriptionContainer: {
    marginTop: 16,
    marginBottom: 40,
  },
  Footer: {
    //flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
});

export default PasswordChanged;
