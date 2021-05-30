import React from "react";
import { useFormikContext } from "formik";

import AuthButton from "../Auth Components/AuthButton";

const FormButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AuthButton title={title} onPress={handleSubmit} />;
};

export default FormButton;
