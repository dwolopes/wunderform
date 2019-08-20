// EditUserDialog.js
import React, { memo } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CustomInputComponent from '../Shared/Input';

interface EditUserDialogProps {
    user?: { id: string }
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    telephone: Yup.string()
      .matches(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g, 'invalid phone number')
      .required('Required'),
    address: Yup.string()
      .required('Required'),
    number: Yup.number()
      .required('Required'),
    zipcode: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Required')
  });


const RegisterForm = ({ user }: EditUserDialogProps) => {
  return (
    <>
      <h1>Register an User</h1>
      <Formik
        initialValues={{firstname: '',  lastname: '', telephone: ''}}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log('Subminting');
        }}
        render={({ errors, status, touched, isSubmitting }) => (
            <Form>
                <Field name='firstName' type='text' label='First Name' component={CustomInputComponent} />
                <ErrorMessage name="firstname" component="div" />  
                <Field type="text" name="lastname" label='Last Name' component={CustomInputComponent}/>
                <ErrorMessage name="lastname" component="div"/> 
                <Field type="string" name="telephone" label='Telephone' component={CustomInputComponent}/>
                <ErrorMessage name="telephone" component="div"/>
                <Field type="string" name="address" label='Address' component={CustomInputComponent}/>
                <ErrorMessage name="address" component="div"/>
                <Field type="number" name="number" label='Number' component={CustomInputComponent}/>
                <ErrorMessage name="number," component="div"/>
                <Field type="string" name="zipcode" label='Zip-Code' component={CustomInputComponent}/>
                <ErrorMessage name="zipcode," component="div"/>
                <Field type="string" name="city" label='City' component={CustomInputComponent}/>
                <ErrorMessage name="city" component="div"/>  
                {status && status.msg && <div>{status.msg}</div>}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
          </Form>
        )}
      />
    </>
  );
};

export default memo(RegisterForm);