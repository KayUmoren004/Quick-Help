import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../Auth Components/AuthTextInput";
import FormErrorMessage from "./FormErrorMessage";

export default function FormField({ name, width, ref, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
