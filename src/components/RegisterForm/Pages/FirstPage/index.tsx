import React, { memo, useContext } from  'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import CustomInputComponent from '../../../Shared/Input';
import ButtonAnimatedFoward from '../../../Shared/ButtonAnimatedFoward';
import { FormInformationContext } from '../../../../containers/Register';
import { Personal } from '../../../../@types';
import './style.scss';

interface Props {
  setPage: (value: number) => void;
  page: number;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  telephone: Yup.string().required("Required")
});

const FirstPage = ({ setPage, page }: Props) => {
  const {
    formInformation: { personal },
    getpersonalInformation
  } = useContext(FormInformationContext);

  return (
    <Formik<Personal>
      initialValues={{
        customerId: personal.customerId || "",
        firstName: personal.firstName || "",
        lastname: personal.lastname || "",
        telephone: personal.telephone || ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log('Values', values);
        getpersonalInformation(values);
        setPage(page + 1);
      }}
      render={({ status, isValid }) => (
        <Form>
          <div className="inputs__firstpage">
            <div>
              <Field
                name="customerId"
                type="hidden"
                value={"1"}
              />
              <Field
                name="firstName"
                type="text"
                label="First Name"
                component={CustomInputComponent}
                required={true}
              />
              <Field
                name="lastname"
                type="text"
                label="Last Name"
                component={CustomInputComponent}
              />
            </div>
            <div>
              <Field
                name="telephone"
                type="string"
                label="Telephone"
                component={CustomInputComponent}
                required={true}
              />
            </div>
          </div>
          <div className="actions__firstpage">
            <ButtonAnimatedFoward disabled={!isValid} content={"Next"} />
          </div>
          {status && status.msg && <div>{status.msg}</div>}
        </Form>
      )}
    />
  );
};

export default memo(FirstPage);
