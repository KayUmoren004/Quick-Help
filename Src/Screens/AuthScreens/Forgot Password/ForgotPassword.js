import React, { useContext, useState } from "react";

//Dependencies
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthTextInput from "../../../Components/Screen Components/Auth Components/AuthTextInput";
import { useTheme } from "@react-navigation/native";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

const ForgotPassword = ({ navigation }) => {
  //Theme
  const { colors } = useTheme();
  //Forgot Password Schema
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  //State
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();
  //Context
  const firebase = useContext(FirebaseContext);

  //Forgot Password
  const forgotPassword = async () => {
    setLoading(true);

    try {
      await firebase.forgotPassword(email);
      navigation.navigate("PasswordChanged");
      navigation.reset({
        index: 0,
        routes: [{ name: "PasswordChanged" }],
      });
    } catch (err) {
      alert(err.message);
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
        <AuthFooter Name="Reset Password" onPress={() => forgotPassword()} />
      )}
    </>
  );
  return (
    <AuthContainer
      text="Reset your password"
      description1="Enter the email address associated with your account"
      {...{ footer }}
    >
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          setEmail(values.email);
        }}
        validationSchema={ForgotPasswordSchema}
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
              returnKeyType="done"
              returnKeyLabel="done"
              keyboardAppearance="default"
              keyboardType="email-address"
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
        )}
      </Formik>
    </AuthContainer>
  );
};

export default ForgotPassword;
