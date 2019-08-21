import React, { memo } from 'react';
import { Field, ErrorMessage } from 'formik';
import CustomInputComponent from '../../../Shared/Input';

const SecondPage = () => (
    <div>
        <Field type="string" name="address" label='Address' component={CustomInputComponent}/>
        <Field type="number" name="number" label='Number' component={CustomInputComponent}/>
        <Field type="string" name="zipcode" label='Zip-Code' component={CustomInputComponent}/>
        <Field type="string" name="city" label='City' component={CustomInputComponent}/>  
    </div>
);

export default memo(SecondPage);