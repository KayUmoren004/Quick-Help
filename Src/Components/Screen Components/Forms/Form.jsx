import React from "react";

//Dependencies
import { Formik } from "formik";

const Form = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        <React.Fragment>{children}</React.Fragment>;
      }}
    </Formik>
  );
};
