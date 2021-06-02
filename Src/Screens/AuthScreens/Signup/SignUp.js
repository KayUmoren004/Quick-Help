import React, { useContext, useRef, useState } from "react";

//Dependencies
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AuthContainer from "../../../Components/Screen Components/Auth Components/AuthContainer";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import AuthFooter from "../../../Components/Screen Components/Auth Components/AuthFooter";
import { UserContext } from "../../../Components/Context/User/UserContext";
import { FirebaseContext } from "../../../Components/Context/Firebase/FirebaseContext";

//Form
import Form from "../../../Components/Screen Components/Forms/Form";
import FormField from "../../../Components/Screen Components/Forms/FormField";
import FormButton from "../../../Components/Screen Components/Forms/FormButton";
import FormErrorMessage from "../../../Components/Screen Components/Forms/FormErrorMessage";

const SignUp = ({ navigation }) => {
  //Yup Validation Schema
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your full name"),
    email: Yup.string()
      .required("Please enter a valid email")
      .email()
      .label("Email"),
    password: Yup.string()
      .required()
      .min(6, "Password must have at least 6 characters")
      .label("Password"),
  });
  //Refs
  const passwordRef = useRef();
  const emailRef = useRef();
  //States
  //const [email, setEmail] = useState();
  //const [name, setName] = useState();
  //const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [passwordIcon, setPasswordIcon] = useState("eye");

  const [registerError, setRegisterError] = useState("");

  //Context
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  //Password Visibility
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  //SignUp
  // const SignUp = async (values, action) => {
  //   setLoading(true);
  //   const { email, password, name } = values;
  //   try {
  //     const createdUser = await registerWithEmail(email, password, name);
  //     setUser({ ...createdUser, isLoggedIn: true });
  //   } catch (error) {
  //     setRegisterError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const signUp = async (values, action) => {
    setLoading(true);

    //const { name, email, password } = user;
    // console.log(user);

    //const values = { email, password, name };

    try {
      const createdUser = await firebase.createUser(values);

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
    <AuthFooter
      Name="Create Account"
      Message="Already have an account?"
      onPress={() => signUp()}
      action="Sign In"
    />
  );
  //values.email, values.password, values.name
  return (
    <AuthContainer
      {...{ footer }}
      text="Create account"
      description1="Welcome,"
      description2="Create an account to continue"
    >
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => signUp(values)}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <FormField
              name="name"
              leftIcon="account"
              placeholder="Enter name"
              autoFocus={false}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <FormField
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
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
          {<FormErrorMessage error={registerError} visible={true} />}
        </View>
        <View style={styles.Footer}>
          {loading && <Loading />}
          {!loading && <FormButton title={"Create Account"} />}
        </View>
      </Form>
    </AuthContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Footer: {
    //flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
});
