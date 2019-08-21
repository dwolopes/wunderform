import React, { memo, useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import CustomInputComponent from '../../../Shared/Input';
import { FormInformationContext } from '../../../../containers/Register';

import { Personal } from '../../../../@types';

interface Props {
	setPage: (value: number) => void;
	page: number;
}

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	telephone: Yup.string().required('Required'),
});

const FirstPage = ({ setPage, page }: Props) => {
	const {
		formInformation: { personal },
		getpersonalInformation,
	} = useContext(FormInformationContext);

	const nextPage = () => {
		setPage(page + 1);
	};

	return (
		<Formik<Personal>
			initialValues={{
				firstName: personal.firstName || '',
				lastname: personal.lastname || '',
				telephone: personal.telephone || '',
			}}
			validationSchema={SignupSchema}
			onSubmit={values => {
				getpersonalInformation(values);
				nextPage();
			}}
			render={({ status, isValid }) => (
				<Form>
					<div>
						<Field name="firstName" type="text" label="First Name" component={CustomInputComponent} />
						<Field name="lastname" type="text" label="Last Name" component={CustomInputComponent} />
						<Field name="telephone" type="string" label="Telephone" component={CustomInputComponent} />
					</div>
					<button type="submit" disabled={!isValid}>
						Next
					</button>
					{status && status.msg && <div>{status.msg}</div>}
				</Form>
			)}
		/>
	);
};

export default memo(FirstPage);
