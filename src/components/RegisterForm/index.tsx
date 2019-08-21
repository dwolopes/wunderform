// EditUserDialog.js
import React, { memo, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CustomInputComponent from '../Shared/Input';
import handleFactory from './handleFactory';
import './style.scss';

interface FormValues {
    firstname: string,  
    lastname: string, 
    telephone: string,
    address: string,
    number: number,
    zipcode: string,
    city: string,
    accountOwner: string,
    iban: string
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    telephone: Yup.string()
      .required('Required'),
    accountOwner: Yup.string()
      .required('Required'),
    iban: Yup.string()
      .required('Required')
  });


const RegisterForm = () => {

  const [page, setPage] = useState<number>(0);

  const nextPage = () => setPage(page + 1);

  const previousPage = () => setPage(page -1);

  const Component = handleFactory(page)

  return (
    <div className='register__container'>
      <h1>Register an User</h1>
      <Formik<FormValues>
        initialValues={{
            firstname: '',  
            lastname: '', 
            telephone: '',
            address: '',
            number: 0,
            zipcode: '',
            city: '',
            accountOwner: '',
            iban: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log('Subminting');
        }}

        render={({ errors, status, touched, isSubmitting, isValid }) => (
            <Form>
                <Component/>
                {

                    page === 2  ?
                    (
                      <div>
                        <button type="submit" disabled={!isValid || isSubmitting}>
                            Submit
                        </button>
                        <button onClick={previousPage}>
                            previous page
                        </button>
                      </div>
                        
                    ) :

                    (
                      <div>
                        <button onClick={nextPage}>
                            next page
                        </button>
                        {
                          page > 0 && (
                            <button onClick={previousPage}>
                              previous page
                            </button>
                          )
                        }
                      </div>
                    )
                }
                {status && status.msg && <div>{status.msg}</div>}
          </Form>
        )}
      />
    </div>
  );
};

export default memo(RegisterForm);