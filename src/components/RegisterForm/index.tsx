import React, { memo, useContext } from 'react';

import { FormInformationContext } from '../../containers/Register';
import handleFactory from './handleFactory';
import './style.scss';

const RegisterForm = () => {
	const { page, setPage, setDisabledDecideStep } = useContext(FormInformationContext);
	const Component = handleFactory(page);
	return (
		<div className="register__art">
			<div>
				<h2>FLEET</h2>
				<p>
					Technology powering the world's largest car and scooter sharing companies. Provides software and
					hardware solutions to help you launch your own free floating sharing business.
				</p>
				<div className="register__container">
					<div className="content">
						<Component setPage={setPage} page={page} setDisabledDecideStep={setDisabledDecideStep} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(RegisterForm);
