import React, { useContext, useState } from "react";

//Dependencies
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthTextInput from "../../../Components/Screen Components/Auth Components/AuthTextInput";
import { useTheme } from "@react-navigation/native";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

//Form
import Form from "../../../Components/Screen Components/Forms/Form";
import FormField from "../../../Components/Screen Components/Forms/FormField";
import FormButton from "../../../Components/Screen Components/Forms/FormButton";
import FormErrorMessage from "../../../Components/Screen Components/Forms/FormErrorMessage";

const ForgotPassword = ({ navigation }) => {
  //Theme
  const { colors } = useTheme();
  //Forgot Password Schema
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .label("Email")
      .email("Enter a valid email")
      .required("Please enter a registered email"),
  });

  //State
  //const [email, setEmail] = useState();
  const [customError, setCustomError] = useState("");
  const [loading, setLoading] = useState();

  //Context
  const firebase = useContext(FirebaseContext);

  //Forgot Password
  const forgotPassword = async (values) => {
    setLoading(true);

    const { email } = values;

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
    <AuthFooter action="Go Back" navigate={() => navigation.goBack()} />
  );
  return (
    <AuthContainer
      text="Reset your password"
      description1="Enter the email address associated with your account"
      {...{ footer }}
    >
      <Form
        initialValues={{ email: "" }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => forgotPassword(values)}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <FormField
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={false}
            />
          </View>
          {<FormErrorMessage error={customError} visible={true} />}
        </View>
        <View style={styles.Footer}>
          {loading && <Loading />}
          {!loading && <FormButton title={"Reset Password"} />}
        </View>
      </Form>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  Footer: {
    //flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
});

export default ForgotPassword;
