<Formik
  enableReinitialize
  initialValues={{ email: "", password: "" }}
  onSubmit={(values) => {
    // setEmail(values.email);
    // setPassword(values.password);
    signIn(values);
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
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.ForgotPassword, { color: Colors.AuthButton }]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
</Formik>;
