import React, { memo } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import './style.scss';


const Register = () => {
    return (
        <RegisterForm/>
    )
}

export default memo(Register);