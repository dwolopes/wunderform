import React, { memo, useContext } from 'react';
import { Formik, Field, Form } from 'formik';

import CustomInputComponent from '../../../Shared/Input';
import ButtonAnimatedFoward from '../../../Shared/ButtonAnimatedFoward';
import ButtonAnimatedBackward from '../../../Shared/ButtonAnimatedBackward';
import { FormInformationContext } from '../../../../containers/Register';
import { Address } from '../../../../@types';
import './styles.scss';

interface Props {
  setPage: (value: number) => void;
  setDisabledDecideStep: (value: boolean) => void;
  page: number;
}

const SecondPage = ({ setPage, page, setDisabledDecideStep }: Props) => {
  const {
    formInformation: { address },
    getAddressInformation
  } = useContext(FormInformationContext);

  return (
    <Formik<Address>
      initialValues={{
        street: address.street,
        number: address.number,
        zipcode: address.zipcode,
        city: address.city
      }}
      onSubmit={values => {
        getAddressInformation(values);
        setPage(page + 1);
      }}
      render={({ status, isValid }) => (
        <Form>
          <div className="inputs__secondpage">
            <div>
              <Field
                type="string"
                name="street"
                label="Street"
                component={CustomInputComponent}
              />
              <Field
                type="number"
                name="number"
                label="Number"
                component={CustomInputComponent}
              />
            </div>
            <div>
              <Field
                type="string"
                name="zipcode"
                label="Zip-Code"
                component={CustomInputComponent}
              />
              <Field
                type="string"
                name="city"
                label="City"
                component={CustomInputComponent}
              />
            </div>
          </div>
          <div className="actions__secondpage">
            <ButtonAnimatedBackward
              content={"Previous"}
              page={page}
              setPage={setPage}
              setDisabledDecideStep={setDisabledDecideStep}
            />
            <ButtonAnimatedFoward content={"Next"} />
          </div>
          {status && status.msg && <div>{status.msg}</div>}
        </Form>
      )}
    />
  );
};

export default memo(SecondPage);
