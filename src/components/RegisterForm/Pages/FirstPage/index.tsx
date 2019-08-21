import React, { memo } from 'react';
import { Field, ErrorMessage } from 'formik';
import CustomInputComponent from '../../../Shared/Input';

const FirstPage = () => (
    <div>
        <Field name='firstName' type='text' label='First Name' component={CustomInputComponent} />  
        <Field type="text" name="lastname" label='Last Name' component={CustomInputComponent}/> 
        <Field type="string" name="telephone" label='Telephone' component={CustomInputComponent}/>
    </div>
);

export default memo(FirstPage);