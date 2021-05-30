import React, { useContext, useRef, useState } from "react";

//Dependencies
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthTextInput from "../../../Components/Screen Components/Auth Components/AuthTextInput";
import { useTheme } from "@react-navigation/native";
import Colors from "../../../Components/Utils/Colors/colors";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { UserContext } from "../../../Components/Context/User/UserContext";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

const Login = ({ navigation }) => {
  const { colors } = useTheme();
  //Yup Validation Schema
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  //Set Ref's for text input
  const passwordRef = useRef();
  //States
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  //Context
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  //SignIn
  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);
      const uid = firebase.getCurrentUser().uid;
      const userInfo = await firebase.getUserInfo(uid);
      setUser({
        name: userInfo.name,
        Email: userInfo.email,
        uid,
        isLoggedIn: true,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

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
          Name="Sign In"
          Message="Don't have an account?"
          onPress={() => signIn()}
          action="Create account"
          navigate={() => navigation.navigate("SignUp")}
        />
      )}
    </>
  );

  return (
    <AuthContainer
      text="Login"
      description1="Welcome back,"
      description2="Sign in to continue"
      {...{ footer }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setEmail(values.email);
          setPassword(values.password);
        }}
        validationSchema={LoginSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
          handleBlur,
          errors,
          touched,
        }) => (
          <View>
            <View>
              <AuthTextInput
                primaryColor={colors.primary}
                placeholderColor={colors.placeholder}
                TextColor={colors.text}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                autoCompleteType="email"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                keyboardAppearance="default"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />
              <Text
                style={{
                  color: "red",
                  marginTop: 5,
                  textAlign: "right",
                  marginRight: 25,
                }}
              >
                {touched.email && errors.name}
              </Text>
            </View>
            <View>
              <AuthTextInput
                ref={passwordRef}
                primaryColor={colors.primary}
                placeholderColor={colors.placeholder}
                TextColor={colors.text}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                autoCompleteType="password"
                autoCapitalize="none"
                secureTextEntry
                returnKeyType="next"
                returnKeyLabel="next"
                keyboardAppearance="default"
                onSubmitEditing={() => handleSubmit()}
              />
              <Text
                style={{
                  color: "red",
                  marginTop: 5,
                  textAlign: "right",
                  marginRight: 25,
                }}
              >
                {touched.email && errors.email}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                paddingVertical: 10,
                marginRight: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={[styles.ForgotPassword, { color: Colors.AuthButton }]}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ForgotPassword: {
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
  },
});
