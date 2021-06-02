import React from "react";
import { useFormikContext } from "formik";

import AuthButton from "../Auth Components/AuthButton";

export default function FormButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AuthButton title={title} onPress={handleSubmit} />;
}
