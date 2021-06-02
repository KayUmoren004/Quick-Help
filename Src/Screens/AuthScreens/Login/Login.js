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
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import Colors from "../../../Components/Utils/Colors/colors";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { UserContext } from "../../../Components/Context/User/UserContext";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

//Form
import Form from "../../../Components/Screen Components/Forms/Form";
import FormField from "../../../Components/Screen Components/Forms/FormField";
import FormButton from "../../../Components/Screen Components/Forms/FormButton";
import FormErrorMessage from "../../../Components/Screen Components/Forms/FormErrorMessage";

const Login = ({ navigation }) => {
  const { colors } = useTheme();
  //Yup Validation Schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter a registered email")
      .email()
      .label("Email"),
    password: Yup.string()
      .required()
      .min(6, "Password must have at least 6 characters")
      .label("Password"),
  });
  //Set Ref's for text input
  const passwordRef = useRef();
  //States
  //const [email, setEmail] = useState();
  //const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  //Context
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  //SignIn
  const signIn = async (values) => {
    setLoading(true);

    const { email, password } = values;

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
    <AuthFooter
      Name="Sign In"
      Message="Don't have an account?"
      onPress={() => signIn()}
      action="Create account"
      navigate={() => navigation.navigate("SignUp")}
    />
  );

  return (
    <AuthContainer
      text="Login"
      description1="Welcome back,"
      description2="Sign in to continue"
      {...{ footer }}
    >
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => signIn(values)}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <FormField
              name="email"
              leftIcon="email"
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={false}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <FormField
              name="password"
              leftIcon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
              textContentType="password"
              rightIcon={rightIcon}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </View>
          {<FormErrorMessage error={loginError} visible={true} />}
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              paddingVertical: 20,
              marginRight: 20,
              marginBottom: 20,
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
        <View style={styles.Footer}>
          {loading && <Loading />}
          {!loading && <FormButton title={"Login"} />}
        </View>
      </Form>
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
    fontSize: 12,
  },
  Footer: {
    //flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
});
