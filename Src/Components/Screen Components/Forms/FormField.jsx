import React from "react";

//Dependencies
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";

const FormField = ({ name, width, placeholder, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        placeholder
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default FormField;
