import React, { memo, useContext } from 'react';

import { FormInformationContext } from '../../containers/Register';
import handleFactory from './handleFactory';
import './style.scss';

const RegisterForm = () => {
	const { page, setPage, setDisabledDecideStep } = useContext(FormInformationContext);
	const Component = handleFactory(page);
	return (
		<div className="register__container">
			<h1>Register an User</h1>
			<Component setPage={setPage} page={page} setDisabledDecideStep={setDisabledDecideStep} />
		</div>
	);
};

export default memo(RegisterForm);
