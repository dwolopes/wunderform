import React, { memo, useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import CustomInputComponent from '../../../Shared/Input';
import ButtonAnimatedBackward from '../../../Shared/ButtonAnimatedBackward';
import ButtonAnimatedFoward from '../../../Shared/ButtonAnimatedFoward';
import { FormInformationContext } from '../../../../containers/Register';
import { Payment } from '../../../../@types';
import './style.scss';

interface Props {
  setPage: (value: number) => void;
  setDisabledDecideStep: (value: boolean) => void;
  page: number;
}

const SignupSchema = Yup.object().shape({
  accountOwner: Yup.string().required("Required"),
  iban: Yup.string().required("Required")
});

const ThirdPage = ({ setPage, page, setDisabledDecideStep }: Props) => {
  const {
    formInformation: { payment },
    getPaymentInformation
  } = useContext(FormInformationContext);

  return (
    <Formik<Payment>
      initialValues={{
        accountOwner: payment.accountOwner,
        iban: payment.iban
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        getPaymentInformation(values);
      }}
      render={({ status, isSubmitting, isValid }) => (
        <Form>
          <div className="inputs__thirdpage">
            <Field
              type="string"
              name="accountOwner"
              label="Account Owner"
              component={CustomInputComponent}
              required={true}
            />
            <Field
              type="string"
              name="iban"
              label="IBAN"
              component={CustomInputComponent}
              required={true}
            />
          </div>
          <div className="actions__thirdpage">
            <ButtonAnimatedBackward
              content={"Previous"}
              page={page}
              setPage={setPage}
              setDisabledDecideStep={setDisabledDecideStep}
            />
            <ButtonAnimatedFoward disabled={!isValid} content={"Send It!"} />
          </div>
          {status && status.msg && <div>{status.msg}</div>}
        </Form>
      )}
    />
  );
};

export default memo(ThirdPage);
