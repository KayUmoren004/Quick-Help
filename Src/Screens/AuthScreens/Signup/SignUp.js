import React, { useContext, useRef, useState } from "react";

//Dependencies
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthTextInput from "../../../Components/Screen Components/Auth Components/AuthTextInput";
import { useTheme } from "@react-navigation/native";
import Colors from "../../../Components/Utils/Colors/colors";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { UserContext } from "../../../Components/Context/User/UserContext";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

const SignUp = ({ navigation }) => {
  const { colors } = useTheme();
  //Yup Validation Schema
  const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    passwordConfirmation: Yup.string()
      .equals([Yup.ref("password")], "Passwords don't match")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your full name"),
  });
  //Refs
  const passwordRef = useRef();
  const passwordConfirmation = useRef();
  const emailRef = useRef();
  //States
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  //Context
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  //SignUp
  const signUp = async () => {
    setLoading(true);

    const user = { name, email, password };

    try {
      const createdUser = await firebase.createUser(user);

      setUser({ ...createdUser, isLoggedIn: true });
    } catch (error) {
      console.log("Error @signUp: ", error);
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
          Name="Create Account"
          Message="Already have an account?"
          onPress={() => signUp()}
          action="Sign In"
          navigate={() => navigation.navigate("Login")}
        />
      )}
    </>
    // <AuthFooter
    //   Name="Create Account"
    //   Message="Already have an account?"
    //   onPress={() => signUp()}
    //   action="Sign In"
    //   navigate={() => navigation.navigate("Login")}
    // />
  );
  return (
    <AuthContainer
      text="Create account"
      description1="Welcome,"
      description2="Create an account to continue"
      {...{ footer }}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          if (values.password === values.passwordConfirmation) {
            setName(values.name);
            setEmail(values.email);
            setPassword(values.password);
          } else {
            console.log("Error @Validation");
          }
        }}
        validationSchema={SignUpSchema}
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
                placeholder="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={errors.name}
                touched={touched.name}
                autoCompleteType="name"
                autoCapitalize="words"
                returnKeyType="next"
                returnKeyLabel="next"
                keyboardAppearance="default"
                keyboardType="default"
                onSubmitEditing={() => {
                  emailRef.current.focus();
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
                ref={emailRef}
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
                {touched.email && errors.email}
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
                onSubmitEditing={() => {
                  passwordConfirmation.current.focus();
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
                {touched.email && errors.password}
              </Text>
            </View>
            <View>
              <AuthTextInput
                ref={passwordConfirmation}
                primaryColor={colors.primary}
                placeholderColor={colors.placeholder}
                TextColor={colors.text}
                placeholder="Confirm your password"
                onChangeText={handleChange("passwordConfirmation")}
                onBlur={handleBlur("passwordConfirmation")}
                error={errors.passwordConfirmation}
                touched={touched.passwordConfirmation}
                autoCompleteType="off"
                autoCapitalize="none"
                secureTextEntry
                returnKeyType="done"
                returnKeyLabel="done"
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
                {touched.email && errors.passwordConfirmation}
              </Text>
            </View>
            {/* Terms and Conditions */}
          </View>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
