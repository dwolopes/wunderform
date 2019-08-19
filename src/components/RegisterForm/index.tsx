// EditUserDialog.js
import React, { memo } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';


interface EditUserDialogProps {
    user?: { id: string }
};


const RegisterForm = ({ user }: EditUserDialogProps) => {
  return (
    <>
      <h1>Register an User</h1>
      <Formik
        initialValues={{firstname: '',  lastname: '', telephone: ''}}
        validate={values => {
            interface errorsAttributes {
                firstname?: string,
                lastname?: string,
                telephone?: string
            };
            let errors: errorsAttributes = {};
            if (!values.firstname) {
              errors.firstname = 'Required';
            }
            if (!values.lastname) {
                errors.lastname = 'Required';
            }
            if (!values.telephone) {
                errors.telephone = 'Required';
            } else if (
               new RegExp('\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}').test(values.telephone)
              ) {
                errors.telephone = 'Invalid number';
              }
            return errors;
          }}
        onSubmit={(values, actions) => {
          console.log('Subminting');
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="firstname"/>
            <ErrorMessage name="firstname" component="div" />  
            <Field type="text" name="lastname" />
            <ErrorMessage name="lastname" component="div"/> 
            <Field type="string" name="telephone" />
            <ErrorMessage name="telephone" component="div"/>  
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