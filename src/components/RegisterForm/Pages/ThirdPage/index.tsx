import React, { memo } from 'react';
import { Field, ErrorMessage } from 'formik';
import CustomInputComponent from '../../../Shared/Input';

const ThirdPage = () => (
    <div>
        <Field type="string" name="accountOwner" label='Account Owner' component={CustomInputComponent}/>
        <Field type="string" name="iban" label='IBAN' component={CustomInputComponent}/>
    </div>
);

export default memo(ThirdPage);