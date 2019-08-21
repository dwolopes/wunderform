import React, { memo, useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';

import CustomInputComponent from '../../../Shared/Input';
import { FormInformationContext } from '../../../../containers/Register';
import { Address } from '../../../../@types';
import { animated, useSpring } from 'react-spring';
import './styles.scss';

interface Props {
	setPage: (value: number) => void;
	setDisabledDecideStep: (value: boolean) => void;
	page: number;
}

const ButtonAnimated = ({ disabled }: {disabled: boolean}) => {
    const [isHovered, setIsHovered] = useState(false);

    const { translate, backgroundColor } = useSpring({
        translate: isHovered ? 20 : 0,
        backgroundColor: isHovered ? 'rgba(6, 106, 150, 1)' : 'rgba(6, 160, 227, 1)',
        config: { duration: 160 }
    });
    const toggleIsHovered = () => setIsHovered(prevState => !prevState);

    return (
        <animated.button
            style={{backgroundColor}}
            onMouseEnter={toggleIsHovered}
            onMouseLeave={toggleIsHovered}
            type="submit">
            Next    
            <animated.span style={{transform: translate.interpolate(x => `translateX(${x}px)`) }}>
                >
            </animated.span>
        </animated.button>
    )
}

const SecondPage = ({ setPage, page }: Props) => {



	const {
		formInformation: { address },
		getAddressInformation,
	} = useContext(FormInformationContext);

	return (
		<Formik<Address>
			initialValues={{
				street: address.street,
				number: address.number,
				zipcode: address.zipcode,
				city: address.city,
			}}
			onSubmit={values => {
				getAddressInformation(values);
				setPage(page + 1);
			}}
			render={({ status, isValid }) => (
				<Form>
					<div>
						<Field type="string" name="street" label="Street" component={CustomInputComponent} />
						<Field type="number" name="number" label="Number" component={CustomInputComponent} />
						<Field type="string" name="zipcode" label="Zip-Code" component={CustomInputComponent} />
						<Field type="string" name="city" label="City" component={CustomInputComponent} />
					</div>
					<button onClick={() => setPage(page - 1)}>Previous Page</button>
					<ButtonAnimated disabled={!isValid} />
					{status && status.msg && <div>{status.msg}</div>}
				</Form>
			)}
		/>
	);
};

export default memo(SecondPage);
